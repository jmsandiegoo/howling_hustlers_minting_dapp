// SPDX-License-Identifier: MIT

/// @title Howling Hustlers (HH) NFT Smart Contract
/// @author Jm San Diego - aka weeeeezy ⚡️
/// @notice This contract basically consists of HH's ERC721 functionalities
/// @dev Please credit my name (author) if any of the code is used 🤟🏻 Also thanks Hashlips!

pragma solidity >=0.7.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HowlingHustlersNFT is ERC721, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private supply;

    string public uriPrefix = "";
    string public uriSuffix = ".json";
    string public hiddenMetadataUri;

    uint256 public wlCost = 0.03 ether;
    uint256 public pubCost = 0.05 ether;
    uint16 public maxSupply = 6000;
    uint8 public maxMintAmountPerTx = 2;

    bool public isSaleActive = false;
    bool public isRevealed = false;

    constructor() ERC721("Howling Hustlers NFT", "HH") {
        setHiddenMetadataUri("ipfs://__CID__/hidden.json");
    }

    modifier mintCompliance(uint256 _mintAmount) {
        require(
            _mintAmount > 0 && _mintAmount <= maxMintAmountPerTx,
            "Invalid mint amount!"
        );
        require(
            supply.current() + _mintAmount <= maxSupply,
            "Max supply has already been reached!"
        );
        _;
    }

    function totalSupply() public view returns (uint16) {
        return supply.current();
    }

    function publicMint(uint8 _mintAmount)
        public
        payable
        mintCompliance(_mintAmount)
    {
        require(isSaleActive, "Minting is not live yet!");
        require(msg.value >= mintCost * _mintAmount, "Insufficient funds!");

        _mintLoop(msg.sender, _mintAmount);
    }

    function mintForAddress(uint8 _mintAmount, address _receiver)
        public
        mintCompliance(_mintAmount)
        onlyOwner
    {
        _mintLoop(_receiver, _mintAmount);
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint16[] memory)
    {
        uint16 ownerTokenCount = balanceOf(_owner);
        uint16[] memory ownedTokenIds = new uint16[](ownerTokenCount);
        uint256 currentTokenId = 1;
        uint256 ownedTokenIndex = 0;

        while (ownedTokenIndex < ownerTokenCount && currentToken <= maxSupply) {
            address currentTokenOwner = ownerOf(currentTokenId);

            if (currentTokenOwner == _owner) {
                ownedTokenIds[ownedTokenIndex] = currentTokenId;

                ownedTokenIndex++;
            }
            curentTokenIndex++;
        }
        return ownedTokenIds;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI query forr nonexistent token"
        );

        if (isRevealed == false) {
            return hiddenMetadataUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currrentBaseURI,
                        _tokenId.toString(),
                        uriSuffix
                    )
                )
                : "";
    }
}
