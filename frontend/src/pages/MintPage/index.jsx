import React, { useEffect, useRef, useState } from "react";
import "./MintPage.css";
import nautxzPng from "../../assets/images/nft/nautxz.png";
import { MintModalComponent } from "./mintModal";
import { useSelector, useDispatch } from "react-redux";
import {
  appAddError,
  appRemoveError,
} from "../../store/application/applicationAction";
import { CONFIG } from "../../config";
import contractAbi from "../../contracts/HowlingHustlersNFT.json";
import { shortenAddress } from "../../utils/addressShortener";
import { Button } from "../../components/Button";
import { ethers } from "ethers";
import { metamaskConnect } from "../../store/metamask/metamaskAction";

const MintPage = () => {
  const [isMinting, setIsMinting] = useState(false);
  const [isMintSuccess, setIsMintSuccess] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  const [smartContract, setSmartContract] = useState(null);
  const [contractData, setContractData] = useState({
    maxMintPerTx: null,
    pubCost: null,
    maxSupply: null,
  });

  const metamask = useSelector((state) => state.metamask);
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const errRef = useRef();
  errRef.current = () => {
    if (app.error?.errorType === "Mint Failed") dispatch(appRemoveError());
  };

  useEffect(() => {
    return () => errRef.current();
  }, []);

  useEffect(() => {
    if (metamask.provider) {
      let smartContract;
      if (!metamask.account) {
        // read only
        smartContract = new ethers.Contract(
          CONFIG.CONTRACTS.NFT_CONTRACT.CONTRACT_ADDRESS,
          contractAbi.abi,
          metamask.provider
        );
      } else {
        // read mutate
        smartContract = new ethers.Contract(
          CONFIG.CONTRACTS.NFT_CONTRACT.CONTRACT_ADDRESS,
          contractAbi.abi,
          metamask.provider.getSigner()
        );
      }

      const initializeContractData = async () => {
        try {
          const data = {
            maxMintPerTx: (await smartContract.maxMintAmountPerTx()).toString(),
            pubCost: ethers.utils.formatEther(await smartContract.pubCost()),
            maxSupply: (await smartContract.maxSupply()).toString(),
            currentSupply: (await smartContract.totalSupply()).toString(),
          };
          setContractData(data);
        } catch (e) {
          console.error(e);
        }
      };
      initializeContractData();
      setSmartContract(smartContract);

      // Set Smart Contract Listener
      metamask.provider.on("block", () => {
        smartContract.on("Transfer", async (from, to, tokenId) => {
          const response = await smartContract.tokenURI(tokenId);
          if (to === metamask.account) {
            setIsMintSuccess(true);
            setIsMinting(false);
          }
        });
      });

      return () => {
        metamask.removeAllListeners("block");
        smartContract.removeAllListeners("Transfer");
      };
    }
  }, [metamask.account]);

  const mint = async () => {
    if (
      metamask.account &&
      (!app.error || app.error.errorType === "Mint Failed")
    ) {
      try {
        dispatch(appRemoveError());
        setIsMinting(true);
        const response = await smartContract.publicMint(
          ethers.BigNumber.from(mintAmount),
          {
            value: ethers.utils.parseEther(
              String(contractData.pubCost * mintAmount)
            ),
          }
        );
        console.log(response);
      } catch (e) {
        console.error(e);
        dispatch(
          appAddError({
            errorType: "Mint Failed",
            errorMessage:
              "Something went wrong while minting! Please try again.",
          })
        );
        setIsMinting(false);
      }
    }
  };

  const handleModalClose = () => {
    setIsMintSuccess(false);
  };

  const addMintAmount = () => {
    mintAmount < contractData.maxMintPerTx && setMintAmount((prev) => prev + 1);
  };

  const subtractMintAmount = () => {
    mintAmount > 1 && setMintAmount((prev) => prev - 1);
  };

  return (
    <main className="mintpage">
      {(isMinting || isMintSuccess) && (
        <MintModalComponent
          isMinting={isMinting}
          isMinted={isMintSuccess}
          handleClose={handleModalClose}
        />
      )}

      <div className="layout">
        <div className="content content--textCenter">
          <section className="mintpage__card">
            <h2 className="mintpage__title">Mint NFT</h2>
            <p className="mintpage__currentMint">
              {contractData.currentSupply}/{contractData.maxSupply} Minted
            </p>
            <a className="mintpage__contractAddress">
              {shortenAddress(CONFIG.CONTRACTS.NFT_CONTRACT.CONTRACT_ADDRESS)}
            </a>
            <form className="mintpage__form">
              <Button handleClick={() => subtractMintAmount()}>-</Button>
              <input
                type="number"
                value={mintAmount}
                onChange={(e) => setMintAmount(e.target.value)}
              />
              <Button handleClick={() => addMintAmount()}>+</Button>
              <div className="mintpage__formAction">
                <span className="mintpage__price">
                  {contractData.pubCost * mintAmount} MATIC
                </span>
                {metamask.account ? (
                  <Button handleClick={mint} type="accent" disabled>
                    MINT
                  </Button>
                ) : (
                  <Button
                    handleClick={() => dispatch(metamaskConnect(true))}
                    type="accent"
                    disabled
                  >
                    CONNECT
                  </Button>
                )}
              </div>
            </form>
          </section>
          {/* <div className="mintpage__filler"></div> */}
          <img className="mintpage__art" src={nautxzPng} />
        </div>
      </div>
    </main>
  );
};

export { MintPage };
