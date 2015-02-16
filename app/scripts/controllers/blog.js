'use strict';

/**
 * @ngdoc function
 * @name myAngularApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the myAngularApp
 */
angular.module('myAngularApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
