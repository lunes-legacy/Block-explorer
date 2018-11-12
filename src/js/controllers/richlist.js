(function () {
    'use strict';

    function RichListCtrl($http) {
        var ctrl = this;
        ctrl.title = 'RichList';

        activate();

        function activate() {
            var Url = "/richlist.csv";
            $http.get(Url).then(function (response) {
                var allTextLines = response.data.split(/\r\n|\n/);
                // var header = allTextLines[0].split(',');
                var body = []
                allTextLines.shift();
                for (let i = 0; i < allTextLines.length; i++) {
                    allTextLines[i] = allTextLines[i].replace(/"/g, '').split(';');
                    body.push(allTextLines[i]);
                }
                ctrl.body = body;
            });
        }
    }

    angular.module('web').controller('RichListCtrl', RichListCtrl);
})();
