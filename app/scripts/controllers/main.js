define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name cppocApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the cppocApp
   */
  angular.module('cppocApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
        document.addEventListener('deviceready', function() {
            alert(device.platform);
        });

      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
