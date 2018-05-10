(function() {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://testnet.lunes.io',
        blockchainName: 'Mainnet',
        title: 'Lunes Explorer',
        nodes: [{
            url: 'https://nodes.wavesnodes.com',
            maintainer: 'Waves'
        }],
        peerExplorer: {
            url: 'https://testnet.lunes.io/api-docs/index.html',
            title: 'TESTNET Explorer'
        },
        wallet: {
            url: 'https://wallet.lunes.io/',
            title: 'Wallet'
        }
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'mainnet', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'W',
        INITIAL_NONCE: 0
    });
})();