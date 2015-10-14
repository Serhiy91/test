angular.module('footballApp')
	.directive('mySliderText', ['$timeout', '$sce', function($timeout, $sce) {
		return {
			restrict: 'EA',
			templateUrl: "directives/my-slider-text/my-slider-text.html",
			scope: {
				titles: '='
			},
			controller: function($scope) {
				var timer;
				$scope.sce = $sce;
				$scope.slideIndex = 0;
				$scope.next = function(isClick) {
					var total = $scope.titles.length;
					if (total > 0) {
						$scope.slideIndex = ($scope.slideIndex == total - 1) ? 0 : $scope.slideIndex + 1;
					}
					if(isClick) {
						$timeout.cancel(timer);
						$scope.play();
					}
				};

				$scope.play = function() {
					timer = $timeout(function() {
						$scope.next();
						$scope.play();
					}, 7000);
				};

				$scope.previous = function() {
					if ($scope.slideIndex === 0) {
						$scope.slideIndex = $scope.titles.length - 1;
					} else {
						$scope.slideIndex = $scope.slideIndex - 1;
					}
					$timeout.cancel(timer);
					$scope.play();
				};

				$scope.play();
			}
		}
	}]);