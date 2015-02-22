'use strict';

/**
 * @ngdoc directive
 * @name myAngularApp.directive:companyProfile
 * @description
 * # companyProfile
 */
angular.module('myAngularApp')
  .directive('companyProfile', function () {
    return {
      templateUrl: 'views/company-profile.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the companyProfile directive');
        // scope.oneAtATime = true;

        // scope.status = {
        //   open: true,
        //   isFirstOpen: true,
        //   isFirstDisabled: false
        // }
      }
    };
  });
