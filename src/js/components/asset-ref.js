(function () {
    'use strict';

    function lunesAssetRefController() {
        var ctrl = this;

        ctrl.$onInit = function () {
        };

        ctrl.$onChanges = function (changesObj) {
            if (changesObj.assetId) {
                if (!ctrl.text)
                    ctrl.text = changesObj.assetId.currentValue;
            }
        }
    }

    angular
        .module('web')
        .component('lunesAssetRef', {
            controller: lunesAssetRefController,
            bindings: {
                assetId: '<',
                maxLength: '<?',
                text: '<?'
            },
            template: '<span ng-if="$ctrl.assetId === null">lunes</span>' +
                '<lunes-transaction-ref ng-if="$ctrl.assetId !== null" tx-id="$ctrl.assetId" text="$ctrl.text"></lunes-transaction-ref>'
        });
})();