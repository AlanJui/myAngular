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
      templateUrl: 'views/directives/company-profile.html',
      restrict: 'E',
      scope: { },
      controller: function($scope) {
        $scope.groups = [
          {
            title: 'Who We Are',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eveniet, ex, exercitationem explicabo fugit id illum inventore ipsa ipsam iure magni omnis, perferendis perspiciatis quidem saepe sequi soluta voluptatibus? Quam?',
            isOpened: true
          },
          {
            title: 'What We Do',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt excepturi laudantium nemo nisi odit rerum similique sunt, temporibus. Autem exercitationem mollitia, nobis placeat rem velit! Alias doloremque id iusto maiores.',
            isOpened: false
          },
          {
            title: 'Why Choose Us?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam blanditiis, consectetur deleniti eligendi et facilis iusto libero nam natus placeat porro tenetur! Itaque nulla perferendis quasi suscipit temporibus? Illum?',
            isOpened: false
          }
        ];

        $scope.setting = {
          oneAtATime:  true
        };
      }
    };
  });
