angular.module('footballApp')
	.directive('championshipCard', [function() {
		return {
			restrict: 'EA',
			templateUrl: "directives/championship-card/championship-card.html",
			scope: {
				championship: '=',
				teams: '='
			},
			link: function($scope, element) {
				$scope.scrollForAnimation = function(team) {
					if (team.foundation_year != 0) {
						var elem = element.children().children()[1];
						elem.scrollTop = 0;
					}
				};
			},
			controller: 'ChampionshipCardCtrl'
		}
	}]);
