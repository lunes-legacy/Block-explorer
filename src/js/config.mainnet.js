(function() {
  'use strict';

  angular.module('web').constant('appConfig', {
      apiDomain: 'https://lunesnode.lunes.io',
      blockchainName: 'Mainnet',
      title: 'Lunes Explorer',
      nodes: [{
          url: 'https://lunesnode.lunes.io',
          maintainer: 'Lunes'
      }],
      peerExplorer: {
          url: 'https://lunesnode.lunes.io/api-docs/index.html',
          title: 'Mainnet Explorer'
      },
      wallet: {
          url: 'https://luneswallet.app/',
          title: 'Wallet'
      }
  });

  angular.module('web').constant('constants.network', {
      NETWORK_NAME: 'mainnet', // 'devnet', 'testnet', 'mainnet'
      ADDRESS_VERSION: 1,
      NETWORK_CODE: '1',
      INITIAL_NONCE: 0
  });
})();