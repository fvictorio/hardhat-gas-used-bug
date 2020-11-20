const accounts = [
  "0x13D0D5F8ee1A8F50d4A3fE9F5df04871794E3874",
  "0x7593E5770D45B7200019612F105EEfB3724d3c91",
  "0x85209183A6d5F0D205DDd2F7c938519C7E4F2139",
  "0x4782d02aA344781131455A48C22B854bf1FF716C",
  "0xa2Cadf6DcdA937EdAA934DE9fBf3bb960bAC9b41",
  "0x0B423aF11bFaB0E6407e285e466c9C9388A03f28",
  "0x96328Af96d0A3a67B6d93A5929950a4a6C08e643",
  "0x2eD4054ee98df938407258619Be256C359404279",
  "0x7c7F2c3414080aA7389b74568133eB35db85025B",
  "0x21cd82aa845Ef3a297268335D239AC48874dE82D"
];

const amounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

async function main() {
  const Token = await ethers.getContractFactory("Token");
  console.log("Deploying...");
  let token = await Token.deploy();
  await token.deployed();

  console.log("Calling airdrop...");
  // const { receipt } = await token.airdrop(accounts, amounts);
  const tx = await token.airdropOne(accounts[0], amounts[0]);

  const receipt = await tx.wait()

  console.log(receipt.gasUsed.toString());
}

main()
  .then(() => process.exit())
  .catch(console.error);
