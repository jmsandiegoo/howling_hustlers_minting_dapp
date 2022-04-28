import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import nautxzPng from "../../assets/images/nft/nautxz.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="homepage">
      <section className="homepage__landing landing">
        <div className="landing__layout layout">
          <div className="landing__content">
            <h1>
              Welcome to <br /> Howling Hustlers
            </h1>
            <p>A hustler inspired NFT collection. Welcome to the jungle!</p>

            <p>Pre-sale is now ongoing</p>
            <Button
              type="accent"
              handleClick={() => {
                navigate("/mint");
              }}
            >
              Mint Now
            </Button>
          </div>
        </div>
      </section>
      <section className="homepage__overview overview">
        <div className="overview__layout layout">
          <div className="overview__content content">
            <h2>Project Overview</h2>
            <p>
              Howling Hustlers is a hustler inspired NFT collection that
              consists of different traits. Our goal is to simply release cool
              looking art to our holders for them to collect and showcase.
            </p>
            <p>
              The collection consists of 2000 NFTs. Each NFT art is a wolf that
              is unique and programmatically generated with varying traits and
              rarity (expressions, headwear, clothing and more). These wolves
              are in a form of ERC-721 tokens and hosted through IPFS. Pre-sale
              and Public mint prices are 100 and 200 MATIC respectively
            </p>
            <div></div>
          </div>
        </div>
      </section>
      <section className="homepage__team team">
        <div className="team__layout layout">
          <div className="team__content content">
            <h2>Team</h2>
            <figure>
              <img src={nautxzPng} />
              <figcaption>
                <h3>nautxz</h3>
                <p>Developer</p>
              </figcaption>
            </figure>
            <figure>
              <img src={nautxzPng} />
              <figcaption>
                <h3>alyssxv</h3>
                <p>Artist</p>
              </figcaption>
            </figure>
            <figure>
              <img src={nautxzPng} />
              <figcaption>
                <h3>alyssxv</h3>
                <p>Artist</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="homepage__faq faq">
        <div className="layout">
          <dl className="faq__content content">
            <h2>FAQ</h2>
            <dt>
              <h3>How can I get into pre-sale?</h3>
            </dt>
            <dd>
              Whitelist spots can be obtained by the first few members of the
              discord community and also from our giveaways
            </dd>
            <dt>
              <h3>How can I get into pre-sale?</h3>
            </dt>
            <dd>
              Collection woud be listed on <em>Opensea</em>
            </dd>
            <dt>
              <h3>Mints per transaction?</h3>
            </dt>
            <dd>2 per transaction for both pre-sale and public</dd>
            <dt>
              <h3>How much will it cost to mint?</h3>
            </dt>
            <dd>
              100 MATIC + Gas (Pre-sale)
              <br />
              200 MATIC + gas (Public)
            </dd>
            <dt>
              <h3>Why is the project simple unlike other projects?</h3>
            </dt>
            <dd>
              We released this project to mainly explore and dabble into Web3
              technology. Also, to provide awesome affordable NFT collectibles.
            </dd>
          </dl>
        </div>
      </section>
    </main>
  );
};

export { HomePage };
