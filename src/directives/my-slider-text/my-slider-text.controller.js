angular.module('footballApp')
	.controller('MySliderTextCtrl', ['$scope', '$timeout', '$sce', function($scope, $timeout, $sce) {
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
	}]);
