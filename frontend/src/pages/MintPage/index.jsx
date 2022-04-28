import React from "react";
import "./MintPage.css";
import nautxzPng from "../../assets/images/nft/nautxz.png";
import { CONFIG } from "../../config";
import { shortenAddress } from "../../utils/addressShortener";
import { Button } from "../../components/Button";

const MintPage = () => {
  return (
    <main className="mintpage">
      <div className="mintpage__layout layout">
        <div className="mintpage__content content">
          <section className="mintpage__card">
            <h2>Mint NFT</h2>
            <p className="card__currentMint">0/1000 Minted</p>
            <a>
              {shortenAddress(CONFIG.CONTRACTS.NFT_CONTRACT.CONTRACT_ADDRESS)}
            </a>
            <form className="mintpage__form form">
              <input type="number" />
              <div className="form__action">
                <strong>100 MATIC</strong>
                <Button>MINT</Button>
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
