'use strict';

describe('Directive: searchWebsiteAndProducts', function () {

  // load the directive's module
  beforeEach(module('myAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-website-and-products></search-website-and-products>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchWebsiteAndProducts directive');
  }));
});
