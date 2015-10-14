angular.module('footballApp')
	.directive('mySearch', function() {
		return {
			restrict: 'EA',
			scope: {
				active: '=',
				inputValue: '='
			},
			templateUrl: "directives/my-search/my-search.html",
			controller: function($scope) {
				$scope.active = false;
				$scope.close = function() {
					$scope.active = false;
					$scope.inputValue='';
				}
			}
		}
	});