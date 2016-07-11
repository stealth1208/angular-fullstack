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
        views: {
          task1: {
            template: '<taskOne></taskOne>'
          },
          task2: {
            template: '<taskTwo></taskTwo>'
          }
        }        
      });
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
