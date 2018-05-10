(function() {
  'use strict'

  function MainCtrl(appConfig) {
    var ctrl = this;
    ctrl.title = appConfig.title;
  }
  angular.module('web').controller('MainCtrl', MainCtrl);
})();

//navbar shadow on scroll
// var nav = $('.navbar'); // Change to nav div
// var nav_class = 'navbar-shadow'; // Change to class name
// var threshold = 100; // Change to pixels scrolled

// $(window).scroll(function () {
    
//         // to hiden bt up screen
//         $(".bnt-scroll-up").show();
    
// });

