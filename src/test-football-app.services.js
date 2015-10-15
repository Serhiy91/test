angular.module('footballApp')
	.factory('FootballAppService', ['$http', 'footballAppConstants', function($http, footballAppConstants) {
		return {
			getChampionships: function() {
				return $http.get(footballAppConstants.CHAMPIONSHIPS_URL).then(function(response) {
					return response.data.result;
				}, function(error) {
					return error.data;
				});
			},
			getTeams: function() {
				return $http.get(footballAppConstants.TEAMS_URL).then(function(response) {
					return response.data.result;
				}, function(error) {
					return error.data;
				});
			}
		}
	}]);