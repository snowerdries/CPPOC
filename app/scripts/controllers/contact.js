define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name cppocApp.controller:ContactCtrl
   * @description
   * # ContactCtrl
   * Controller of the cppocApp
   */
  angular.module('cppocApp.controllers.ContactCtrl', [])
    .controller('ContactCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
