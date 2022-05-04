import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import nautxzPng from "../../assets/images/nft/nautxz.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="homepage">
      <section className="homepage__landing">
        <div className="layout">
          <div className="content content--large">
            <h1 className="homepage__mainTitle">
              Welcome to <br /> Howling Hustlers
            </h1>
            <p className="homepage__subText">
              A hustler inspired NFT collection. Welcome to the jungle!
            </p>

            <p className="homepage__salePhase">Pre-sale is now ongoing</p>
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
      <section className="homepage__overview">
        <div className="layout">
          <div className="content content--small content--textCenter">
            <h2 className="homepage__subTitle">Project Overview</h2>
            <p className="homepage__text">
              Howling Hustlers is a hustler inspired NFT collection that
              consists of different traits. Our goal is to simply release cool
              looking art to our holders for them to collect and showcase.
            </p>
            <p className="homepage__text">
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
      <section className="homepage__team">
        <div className="layout">
          <div className="content content--textCenter">
            <h2 className="homepage__subTitle">Team</h2>

            <figure className="member">
              <img src={nautxzPng} />
              <figcaption>
                <h3 className="member__name">nautxz</h3>
                <p className="member__role">Developer</p>
              </figcaption>
            </figure>
            <figure className="member">
              <img src={nautxzPng} />
              <figcaption>
                <h3 className="member__name">alyssxv</h3>
                <p className="member__role">Artist</p>
              </figcaption>
            </figure>
            <figure className="member">
              <img src={nautxzPng} />
              <figcaption>
                <h3 className="member__name">alyssxv</h3>
                <p className="member__role">Artist</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="homepage__faq">
        <div className="layout">
          <dl className="content content--small content--textCenter">
            <h2 className="homepage__subTitle">FAQ</h2>
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
