(function () {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://lunesnode.lunes.io',
        title: 'Lunes Testnet Explorer',
        blockchainName: 'Testnet',
        nodes: [
            {url: 'https://lunesnode.lunes.io', maintainer: 'Lunes', showAsLink: true},
        ],
        peerExplorer: {
            url: 'https://blockexplorer.lunes.io/',
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
        NETWORK_CODE: '1',
        INITIAL_NONCE: 0
    });
})();
