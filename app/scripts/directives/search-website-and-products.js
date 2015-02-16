'use strict';

/**
 * @ngdoc directive
 * @name myAngularApp.directive:searchWebsiteAndProducts
 * @description
 * # searchWebsiteAndProducts
 */
angular.module('myAngularApp')
  .directive('searchWebsiteAndProducts', function () {
    return {
      templateUrl: '../../views/search-website-and-products.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the searchWebsiteAndProducts directive');
      }
    };
  });
