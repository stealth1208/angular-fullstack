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
        views: {
          // Main view - Relative name
          '': {
            template: '<tasks></tasks>'
          },
          // Component view - Absolute name
          'taskOne@tasks': {
            template: '<task-one></task-one>'
          },
          'taskTwo@tasks': {
            template: '<task-two></task-two>'
          }
        }        
      });
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
