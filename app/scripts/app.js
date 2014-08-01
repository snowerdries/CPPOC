/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/contact']/*deps*/, function (angular, MainCtrl, AboutCtrl, ContactCtrl)/*invoke*/ {
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
'cppocApp.controllers.ContactCtrl',
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
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
