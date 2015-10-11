angular.module('footballApp')
	.directive('mySearch', function($compile) {
		return {
			restrict: 'EA',
			scope: {
				active: '=',
				inputValue: '='
			},
			templateUrl: "directives/my-search/my-search.html",
			link: function(scope, element, attrs) {
				scope.active = false;
			}
		}
	});