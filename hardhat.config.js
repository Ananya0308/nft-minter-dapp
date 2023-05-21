/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    hardhat: {},
    liberty: {
      url: "https://liberty20.shardeum.org/",
      chainId: 8081,
      accounts: [process.env.REACT_APP_METAMASK_PRIVATE_KEY],
    },
    sphinx: {
      url: "https://sphinx.shardeum.org/",
      accounts: [process.env.REACT_APP_METAMASK_PRIVATE_KEY],
    },
  },
  solidity: "0.8.3",
};

// npx hardhat run scripts/deploy.js --network <network-name>
