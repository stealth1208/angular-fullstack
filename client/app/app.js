'use strict';

angular.module('appApp', ['appApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
  'ui.bootstrap'
])
  .config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      })
      .state('tasks', {
        url: '/tasks',
        template: '<tasks></tasks>',
        // controller: 'TasksController',
        // controllerAs: 'vm'
      });
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
