angular.module('flapperNews', ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('home', {
        templateUrl: 'home/_home.html',
        url: '/home',
        controller: 'MainCtrl'
      })
      .state('posts', {
        templateUrl: 'posts/_posts.html',
        url: '/posts/{id}',
        controller: 'PostsCtrl'
      });

      $urlRouterProvider.otherwise('home');
  }])
