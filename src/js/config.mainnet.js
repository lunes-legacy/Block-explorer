(function() {
  "use strict";

  angular.module("web").constant("appConfig", {
    apiDomain: "https://lunesnode-testnet.lunes.io",
    blockchainName: "Mainnet",
    title: "Lunes Explorer",
    nodes: [
      {
        url: "https://lunesnode-testnet.lunes.io",
        maintainer: "Lunes"
      }
    ],
    peerExplorer: {
      url: "https://lunesnode-testnet.lunes.io/api-docs/index.html",
      title: "TESTNET Explorer"
    },
    wallet: {
      url: "https://wallet.lunes.io/",
      title: "Wallet"
    }
  });

  angular.module("web").constant("constants.network", {
    NETWORK_NAME: "testnet", // 'devnet', 'testnet', 'mainnet'
    ADDRESS_VERSION: 0,
    NETWORK_CODE: "T",
    INITIAL_NONCE: 0
  });
})();
