(function () {
    'use strict';

    function LunesTransactionRefController() {
        var ctrl = this;

        ctrl.$onInit = function () {
        };

        ctrl.$onChanges = function (changesObj) {
            if (changesObj.txId) {
                if (!ctrl.text)
                    ctrl.text = changesObj.txId.currentValue;
            }
        }
    }

    angular
        .module('web')
        .component('lunesTransactionRef', {
            controller: LunesTransactionRefController,
            bindings: {
                txId: '<',
                maxLength: '<?',
                text: '<?'
            },
            template: '<a class="mono" ui-sref="tx-details({id:$ctrl.txId})" >' +
                '{{$ctrl.text|limitTo:$ctrl.maxLength}}{{$ctrl.text.length > $ctrl.maxLength ? "&hellip;" : ""}}' +
            '</a>'
        });
})();