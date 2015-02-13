'use strict';

/**
 * @ngdoc function
 * @name myAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAngularApp
 */
angular.module('myAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
