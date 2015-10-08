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
			},
			getLatestMatches: function() {
				return $http.get(footballAppConstants.LATEST_MATCHES_URL).then(function(response) {
					return response.data.result;
				}, function(error) {
					return error.data;
				});
			},
			getCountriesFlags: function() {
				return $http.get(footballAppConstants.COUNTRIES_FLAGS_URL).then(function(response) {
					return response.data.result;
				}, function(error) {
					return error.data;
				});
			},
			getChempionshipsEmblems: function() {
				return $http.get(footballAppConstants.CHAMPIONSHIPS_EMBLEMS_URL).then(function(response) {
					return response.data.result;
				}, function(error) {
					return error.data;
				});
			},
			getTeamsEmblems: function() {
				return $http.get(footballAppConstants.TEAMS_EMBLEMS_URL).then(function(response) {
					return response.data.result;
				}, function(error) {
					return error.data;
				});
			}
		}
	}]);