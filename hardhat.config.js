require("@nomiclabs/hardhat-ethers")

module.exports = {
  solidity: {
    version: '0.7.4',
    settings: {
      optimizer: {
        enabled: !!process.env.FORK,
        runs: 200,
      },
    },
  },

  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: process.env.FORK_URL,
      },
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY]
    },
  },
};
