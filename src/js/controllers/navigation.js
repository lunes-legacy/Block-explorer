(function () {
    'use strict';

    angular
        .module('web')
        .controller('NavigationCtrl', ['$scope', 'appConfig', function ($scope, config) {
            var nav = this;

            var menuItems = [];
            menuItems.push({
                url: 'blocks',
                title: 'Blocks',
                icon: '../../icons/blocks.svg'
            });
            menuItems.push({
                url: 'peers',
                title: 'Peers',
                icon: '../../icons/peer.svg'
            });
            if (config.faucet) {
                menuItems.push({
                    url: 'faucet',
                    title: 'Faucet',
                    icon: 'glyphicon glyphicon-filter'
                });
            }
            menuItems.push({
                url: 'nodes',
                title: 'Nodes',
                icon: '../../icons/node.svg'
            });
            menuItems.push({
                url: 'richlist',
                title: 'RichList',
                icon: '../../icons/rich_list2x.png'
            });
            nav.menuItems = menuItems;

            nav.wallet = config.wallet;
            nav.peerExplorer = config.peerExplorer;
        }]);
})();
