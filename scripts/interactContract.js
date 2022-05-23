async function main() {
  const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const Contract = await ethers.getContractFactory("HowlingHustlersNFT");
  const contract = await Contract.attach(address);

  await contract.setIsSaleActive(true);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
  });
