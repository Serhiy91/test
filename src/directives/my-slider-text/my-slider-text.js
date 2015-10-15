angular.module('footballApp')
	.directive('mySliderText', [function() {
		return {
			restrict: 'EA',
			templateUrl: "directives/my-slider-text/my-slider-text.html",
			scope: {
				titles: '='
			},
			controller: 'MySliderTextCtrl'
		}
	}]);