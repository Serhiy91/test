angular.module('footballApp')
	.controller('ChampionshipCardCtrl', ['$scope', 'footballAppConstants',
		function($scope, footballAppConstants) {
			$scope.imageChampionshipUrl = footballAppConstants.CHAMPIONSHIPS_EMBLEMS_URL;
			$scope.imageTeamUrl = footballAppConstants.TEAMS_EMBLEMS_URL;

			$scope.infoList = [
				{title: 'Рік заснування', name: 'foundation_year'},
				{title: 'Місто', name: 'city'},
				{title: 'Тренер', name: 'coach'},
				{title: 'Президент', name: 'president'},
				{title: 'Домашній стадіон', name: 'home_stadion'}
			];

			$scope.sort = function() {
				$scope.reverse = !$scope.reverse;
				$scope.sortField = $scope.reverse !== undefined ? 'name' : false;
			};

			$scope.goBack = function() {
				$scope.teamCard = false;
			};

			$scope.selectTeam = function(team) {
				var deletedEmptyTag;

				if (team.foundation_year != 0) {
					$scope.teamCard = true;

					deletedEmptyTag = team.title.replace(/<(p)\s[^>]+>/g, '<p>')
						.replace(/<p>&nbsp;<\/p>/g, '')
						.replace(/<p>-<\/p>/g, '');
					team.parsedTitle = deletedEmptyTag.match(/<p>(.*?)<\/p>/g);

					if (team.id_championship === '7') {
						if (team.parsedTitle) {
							team.parsedTitle = parseItalianTitles(team.parsedTitle);
						}
					}
					$scope.team = team;
				}

				function parseItalianTitles(titlesStr) {
					var titles = [];
					titlesStr.reduce(function(preElem ,elem, i) {
						if (i % 2 === 0) {
							return preElem = elem;
						} else {
							return titles.push((preElem + elem).replace(/<\/?p>/g, ''));
						}
					});
					return titles;
				}
			};
		}]);
