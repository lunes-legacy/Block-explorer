(function () {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://testnet.lunes.io/api-docs/index.html',
        title: 'Lunes Devnet Explorer',
        blockchainName: 'Devnet',
        nodes: [
            {url: 'https://testnet.lunes.io/api-docs/index.html', maintainer: 'Lunes', showAsLink: true}
        ],
        peerExplorer: {
            url: 'https://testnet.lunes.io/api-docs/index.html',
            title: 'Devnet Explorer'
        },
        wallet: {
            url: 'https://wallet.lunes.io/',
            title: 'Wallet'
        }
    });


    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'devnet', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'D',
        INITIAL_NONCE: 0
    });
})();
