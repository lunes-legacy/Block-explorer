(function () {
    'use strict';

    angular
        .module('web')
        .component('lunesBlockRef', {
            bindings: {
                height: '<'
            },
            template: '<a ui-sref="block-details({height:$ctrl.height})">{{$ctrl.height}}</a>'
        });
})();