import { CONFIG } from "../../config";
import { ethers } from "ethers";
import {
  appInitializing,
  appInitialized,
} from "../application/applicationAction";

// Actions
const connectRequest = () => {
  return {
    type: "METAMASK/CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "METAMASK/CONNECTION_SUCCESS",
    payload: payload,
    error: null,
  };
};

const connectFailed = ({ payload = null, error }) => {
  return {
    type: "METAMASK/CONNECTION_FAILED",
    payload: payload,
    error: error,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "METAMASK/UPDATE_ACCOUNT",
    payload: payload,
  };
};

const disconnectRequest = () => {
  return {
    type: "METAMASK/DISCONNECT",
  };
};

const providerDetected = (payload) => {
  return {
    type: "METAMASK/PROVIDER_DETECTED",
    payload: payload,
  };
};

// initialize with metamask provider

const metamaskConnect = (isUserInvoked = false) => {
  return async (dispatch, getState) => {
    dispatch(connectRequest());
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      dispatch(providerDetected({ provider: provider }));
      try {
        let accounts = await provider.listAccounts();

        // When connect button is pressed
        if (accounts.length <= 0 && isUserInvoked) {
          await provider.send("eth_requestAccounts");
          accounts = await provider.listAccounts();
        }

        if (accounts.length > 0) {
          const networkId = (await provider.getNetwork()).chainId;
          if (parseInt(networkId) === CONFIG.NETWORK.LOCAL.ID) {
            dispatch(
              connectSuccess({
                account: accounts[0],
                provider: provider,
              })
            );
          } else {
            dispatch(
              connectFailed({
                payload: {
                  account: accounts[0],
                  provider: provider,
                },
                error: {
                  errorType: "Wrong Network",
                  errorMessage: `Please change network to ${CONFIG.NETWORK.LOCAL.NAME}`,
                },
              })
            );
          }
        }
      } catch (e) {
        console.log(e);
        dispatch(
          connectFailed({
            error: {
              errorType: "Network Error",
              errorMessage:
                "There was an error that occured while communicating with the network. Please try again ",
            },
          })
        );
      }
    } else {
      dispatch(
        connectFailed({
          error: {
            errorType: "Metamask not detected",
            errorMessage: "Please install metamask extension",
          },
        })
      );
    }
  };
};

const metamaskDisconnect = () => {
  return (dispatch) => {
    dispatch(disconnectRequest());
  };
};

const metamaskUpdateAccount = (account) => {
  return (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
  };
};

export { metamaskConnect, metamaskDisconnect, metamaskUpdateAccount };
