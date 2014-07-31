define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name cppocApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the cppocApp
   */
  angular.module('cppocApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
