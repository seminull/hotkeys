(function() {

   'use strict';
 
   angular.module('hotkeys', ['ngRoute']);

   angular.module("hotkeys").config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/page1', {
                templateUrl: 'views/page1.html',
                controller: 'PageOneController'
            }).
            when('/page2', {
                templateUrl: 'views/page2.html',
              controller: 'PageTwoController'
            });      
    }]);

}());
