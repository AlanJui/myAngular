'use strict';

/**
 * @ngdoc directive
 * @name myAngularApp.directive:myCarousel
 * @description
 * # myCarousel
 */
angular.module('myAngularApp')
  .directive('myCarousel', function () {
    return {
      templateUrl: 'views/directives/my-carousel.html',
      restrict: 'E',
      scope: {},
      controller: function($scope) {
        $scope.myInterval = 3000;
        $scope.slides = [];

        var mySlides = [
          {
            image: '/images/slide1.jpg',
            text: 'Professional'
          },
          {
            image: '/images/slide2.jpg',
            text: 'Working Together with Customer'
          },
          {
            image: '/images/slide3.jpg',
            text: 'Total Solutions'
          }
        ];

        $scope.addSlide = function(slide) {
          $scope.slides.push(slide);
        };

        for (var i=0; i < mySlides.length; i++) {
          $scope.addSlide(mySlides[i]);
        }
      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the myCarousel directive');
      }
    };
  });
