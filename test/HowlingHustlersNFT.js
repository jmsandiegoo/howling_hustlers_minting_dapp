const { expect } = require("chai");

describe("HowlingHustlersNFT Contract", function () {
  let howlingHustlersCF, howlingHustlersC, owner, addrs;
  const pubCost = ethers.utils.parseUnits("50", "ether");
  const maxSupply = 1000;
  const maxMintAmountPerTx = 5;

  beforeEach(async function () {
    howlingHustlersCF = await ethers.getContractFactory("HowlingHustlersNFT");
    [owner, ...addrs] = await ethers.getSigners();

    howlingHustlersC = await howlingHustlersCF.deploy();
    await howlingHustlersC.deployed();
  });

  describe("Contract Deployment", function () {
    it("Should be the right owner", async function () {
      expect(await howlingHustlersC.owner()).to.equal(owner.address);
    });
    it("State variables initialized correctly", async function () {
      // Checking pubCost
      expect(await howlingHustlersC.pubCost()).to.equal(
        pubCost,
        "pubCost initalized with unexpected value"
      );
      // Checking maxSupply
      expect(await howlingHustlersC.maxSupply()).to.equal(
        maxSupply,
        "maxSupply initialized with unexpected value"
      );
      // Checking maxMintAmountPerTx
      expect(await howlingHustlersC.maxMintAmountPerTx()).to.equal(
        maxMintAmountPerTx,
        "maxMintAmountPerTx initialized with unexpected value"
      );
      // Checking isSaleActive
      expect(
        await howlingHustlersC.isSaleActive(),
        "isSaleActive initialized with unexpected value"
      ).is.false;
      // Checking isRevealed
      expect(
        await howlingHustlersC.isRevealed(),
        "isRevealed initialized with unexpected value"
      ).is.false;
    });
  });

  describe("Minting Functionality", function () {
    it("Testing public mint function", async function () {
      await howlingHustlersC.setIsSaleActive(true);
      await howlingHustlersC.setUriPrefix("ipfs://prefix/");
      await howlingHustlersC.setIsRevealed(true);

      await expect(
        howlingHustlersC.publicMint(2, {
          value: pubCost.mul(2),
        })
      ).to.not.be.reverted;
      const ownedTokens = await howlingHustlersC.walletOfOwner(owner.address);
      expect(await howlingHustlersC.balanceOf(owner.address)).to.equal(
        ownedTokens.length
      );
      expect(await howlingHustlersC.totalSupply()).to.be.equal(2);

      for (let i = 0; i < ownedTokens.length; i++) {
        expect(await howlingHustlersC.tokenURI(ownedTokens[i])).to.be.equal(
          `${
            (await howlingHustlersC.uriPrefix()) +
            ownedTokens[i] +
            (await howlingHustlersC.uriSuffix())
          }`
        );
      }
    });

    it("mintForAddress should mint for the given address", async function () {});
  });

  describe("Token Transfer Functionality", function () {});

  describe("Contract Authorization", function () {});
});
