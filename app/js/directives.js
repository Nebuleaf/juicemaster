'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
    directive('pulsate', function () {
        return function(scope, element, attrs) {
            (function pulse () {
                $(element).animate({
                    backgroundColor:'#FE9900'
                }, 500, function() {
                    $(element).animate({
                        backgroundColor: '#FEBE63'
                    }, 500, function() {
                        pulse();
                    });
                });
            })();
        }
    }).
    directive('bounceLeft', function () {
        return function(scope, element, attrs) {
            (function bounce () {
                $(element).animate({
                    left:'-=5'
                }, 750, function() {
                    $(element).animate({
                        left:'+=5'
                    }, 750, function() {
                        bounce();
                    });
                });
            })();
        }
    });
