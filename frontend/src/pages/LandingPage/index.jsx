import React from "react";
import "./LandingPage.css";
import logoWhiteSvg from "../../assets/images/logo-white.png";
import discordSvg from "../../assets/images/discord-logo.svg";
import twitterSvg from "../../assets/images/twitter-logo.svg";
import instagramSvg from "../../assets/images/instagram-logo.svg";
import fullMoonSvg from "../../assets/images/full-moon.svg";

const LandingPage = () => {
  return (
    <main className="landing">
      <div className="landing-wrapper">
        <nav className="landing-nav">
          <img className="landing-nav__logo" src={logoWhiteSvg} />
          <ul className="landing-nav__links">
            <li>
              <a href="#" onClick={() => alert("Discord is coming soon!")}>
                <img src={discordSvg} />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => alert("Twitter is coming soon!")}>
                <img src={twitterSvg} />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => alert("Instagram is coming soon!")}>
                <img src={instagramSvg} />
              </a>
            </li>
          </ul>
        </nav>
        <section className="landing-content">
          <img className="landing-content__full-moon" src={fullMoonSvg} />
          <h1 className="landing-content">Howling Hustlers</h1>
          <p>
            An exclusive Singapore based NFT Community by hustlers for hustlers
          </p>
          <p className="landing-content__coming-soon">Coming Soon.</p>
        </section>
      </div>
    </main>
  );
};

export { LandingPage };
