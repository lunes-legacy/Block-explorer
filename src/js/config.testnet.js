(function () {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://testnet.lunes.io',
        title: 'Lunes Testnet Explorer',
        blockchainName: 'Testnet',
        nodes: [
            {url: 'https://testnet.lunes.io', maintainer: 'Lunes', showAsLink: true},
        ],
        peerExplorer: {
            url: 'https://blockexplorer-testnet.lunes.io/',
            title: 'MAINNET Explorer'
        },
        wallet: {
            url: 'https://wallet.lunes.io/',
            title: 'Wallet'
        }
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'devel', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'T',
        INITIAL_NONCE: 0
    });
})();
