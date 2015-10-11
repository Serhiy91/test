angular.module('footballApp')
	.directive('myFocus', ['$timeout', function($timeout) {
		return function(scope, element, attrs) {
			attrs.$observe('myFocus', function() {
				if (scope.$eval(attrs.myFocus)) {
					$timeout(function() {
						element[0].focus();
					})
				}
			})
		}
	}]);
