'use strict';

describe('Directive: myCarousel', function () {

  // load the directive's module
  beforeEach(module('myAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-carousel></my-carousel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myCarousel directive');
  }));
});
