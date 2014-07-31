/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about']/*deps*/, function (angular, MainCtrl, AboutCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name cppocApp
   * @description
   * # cppocApp
   *
   * Main module of the application.
   */
  return angular
    .module('cppocApp', ['cppocApp.controllers.MainCtrl',
'cppocApp.controllers.AboutCtrl',
/*angJSDeps*/
    'ngResource',
    'ngRoute'
    
   
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
