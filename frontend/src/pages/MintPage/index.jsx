import React from "react";
import "./MintPage.css";
import nautxzPng from "../../assets/images/nft/nautxz.png";
import { CONFIG } from "../../config";
import { shortenAddress } from "../../utils/addressShortener";
import { Button } from "../../components/Button";

const MintPage = () => {
  return (
    <main className="mintpage">
      <div className="layout">
        <div className="content--large content ">
          <section className="mintpage__card">
            <h2 className="mintpage__title">Mint NFT</h2>
            <p className="mintpage__currentMint">0/1000 Minted</p>
            <a className="mintpage__contractAddress">
              {shortenAddress(CONFIG.CONTRACTS.NFT_CONTRACT.CONTRACT_ADDRESS)}
            </a>
            <form className="mintpage__form">
              <input type="number" />
              <div className="mintpage__formAction">
                <strong>100 MATIC</strong>
                <Button type="accent">MINT</Button>
              </div>
            </form>
          </section>
          <img src={nautxzPng} />
        </div>
      </div>
    </main>
  );
};

export { MintPage };
