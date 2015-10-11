angular.module('footballApp')
	.directive('championshipCard', ['footballAppConstants', function(footballAppConstants) {
		return {
			restrict: 'EA',
			templateUrl: "directives/championship-card/championship-card.html",
			scope: {
				championship: '=',
				teams: '='
			},
			link: function(scope, element, attrs) {
				scope.selectTeam = function(team) {
					scope.qwe = true;
					scope.team = team;
				};
				scope.ewq = function() {
					scope.qwe = false;
				};
			},
			controller: function($scope) {
				$scope.sort = function() {
					$scope.reverse = !$scope.reverse;
					$scope.sortField = $scope.reverse !== undefined ? 'name' : false;
				};
				$scope.imageChampionshipUrl = footballAppConstants.CHAMPIONSHIPS_EMBLEMS_URL;
				$scope.imageTeamUrl = footballAppConstants.TEAMS_EMBLEMS_URL;
			}
		}
	}]);
