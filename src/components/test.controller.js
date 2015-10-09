angular.module('footballApp')
	.controller('FootballCtrl', ['$scope', 'FootballAppService', 'footballAppConstants',
		function($scope, FootballAppService, footballAppConstants) {
			FootballAppService.getChampionships().then(function(championships) {
				$scope.championships = championships;
				$scope.image = footballAppConstants.CHAMPIONSHIPS_EMBLEMS_URL;
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
				$scope.teams = teamsByChampionship;
				$scope.imageTeam = footballAppConstants.TEAMS_EMBLEMS_URL;
			});
		}]);
