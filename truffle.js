const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");
var secret = require("./secret");
var mnemonic = secret.mnemonic;
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    dexon: {
      provider: new HDWalletProvider(
        mnemonic,
        "http://testnet.dexon.org:8545",
        0,
        1,
        true,
        "m/44'/237'/0'/0/"
      ),
      network_id: "*"
    },
    development: {
      network_id: "*",
      host: "localhost",
      port: 7545,
      gas: 4712388
    }
  }
};
