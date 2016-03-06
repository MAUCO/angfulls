'use strict';

angular.module('angfullsApp.auth', [
  'angfullsApp.constants',
  'angfullsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
