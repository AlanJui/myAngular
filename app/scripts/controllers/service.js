'use strict';

/**
 * @ngdoc function
 * @name myAngularApp.controller:ServiceCtrl
 * @description
 * # ServiceCtrl
 * Controller of the myAngularApp
 */
angular.module('myAngularApp')
  .controller('ServiceCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
