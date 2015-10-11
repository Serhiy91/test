angular.module('footballApp')
	.controller('FootballCtrl', ['$scope', 'FootballAppService', function($scope, FootballAppService) {
			FootballAppService.getChampionships().then(function(championships) {
				$scope.championships = championships;
			});
			FootballAppService.getTeams().then(function(teams) {
				var i;
				var teamsByChampionship = {};
				var championshipId;

				for (i = 0; i < teams.length; i++) {
					championshipId = teams[i].id_championship;
					if(teamsByChampionship[championshipId]) {
						teamsByChampionship[championshipId].push(teams[i]);
					} else {
						teamsByChampionship[championshipId] = [];
						teamsByChampionship[championshipId].push(teams[i]);
					}
				}
				$scope.teamsByChampionship = teamsByChampionship;
			});
		}]);
