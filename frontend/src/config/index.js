import * as hhContract from "../contracts/contract-address.json";

export const CONFIG = {
  CONTRACTS: {
    NFT_CONTRACT: {
      CONTRACT_ADDRESS: hhContract.HowlingHustlersC,
    },
  },
  NETWORK: {
    LOCAL: {
      NAME: "Localhost",
      SYMBOL: "MATIC",
      ID: 31337,
    },
    TEST: {
      NAME: "Rinkeby",
      SYMBOL: "ETH",
      ID: 4,
      SCAN_LINK:
        "https://rinkeby.etherscan.io/token/0x90091e2B03203980B2577d5f3CDd63a880B0C314",
    },
    PRODUCTION: {
      NAME: "Ethereum Mainnet",
      SYMBOL: "ETH",
      ID: 1,
      SCAN_LINK: "TBD",
    },
  },
  NFT_NAME: "Howling Hustlers NFT",
  SYMBOL: "HH",
  MAX_SUPPLY: 1000,
  COST: "50",
  // GAS_LIMIT: 285000,
  MARKETPLACE: "Opeansea",
  // MARKETPLACE_LINK: "https://testnets.opensea.io/collection/sheesh-eye-nft",
};
