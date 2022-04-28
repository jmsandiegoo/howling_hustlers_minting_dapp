import React from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  metamaskConnect,
  metamaskDisconnect,
  metamaskUpdateAccount,
} from "../store/metamask/metamaskAction";
import { Button } from "./Button";
import logoWhitePng from "../assets/images/logo-white.png";
import discordLogoSvg from "../assets/images/discord-logo.svg";
import instagramLogoSvg from "../assets/images/instagram-logo.svg";
import twitterLogoSvg from "../assets/images/twitter-logo.svg";
import { shortenAddress } from "../utils/addressShortener";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const metamask = useSelector((state) => state.metamask);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(metamaskConnect(false));

    if (window.ethereum && window.ethereum.isMetaMask) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          dispatch(metamaskUpdateAccount(accounts[0]));
        } else {
          dispatch(metamaskDisconnect());
        }
      };

      const handleChainChanged = () => {
        dispatch(metamaskConnect(false));
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);

      return () => {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      };
    }
  }, []);

  return (
    <nav className="main-navbar">
      <a href="">
        <img className="landing-nav__logo" src={logoWhitePng} />
      </a>

      <div>
        <ul class="main-navbar__links">
          {[
            { label: "Overview", pathName: "/home" },
            { label: "Mint", pathName: "/mint" },
            { label: "Collection", pathName: "/collection" },
            { label: "My Hustlers", pathName: "/my-hustlers" },
          ].map((e, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  navigate(e.pathName);
                }}
                className={location.pathname === e.pathName && "active"}
              >
                {e.label}
              </li>
            );
          })}
        </ul>
        <ul class="main-navbar__socials">
          <li>
            <img src={discordLogoSvg} />
          </li>
          <li>
            <img src={twitterLogoSvg} />
          </li>
          <li>
            <img src={instagramLogoSvg} />
          </li>
        </ul>
        {metamask.account ? (
          <Button type="accent">{shortenAddress(metamask.account)}</Button>
        ) : (
          <Button
            type="accent"
            handleClick={() => {
              dispatch(metamaskConnect(true));
            }}
          >
            Connect Wallet
          </Button>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
