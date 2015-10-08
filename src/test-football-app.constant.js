angular.module('footballApp')
	.constant('footballAppConstants', {
		LATEST_MATCHES_URL: 'http://footballbet.com.ua/api/matches/',
		CHAMPIONSHIPS_URL: 'http://footballbet.com.ua/api/championships/',
		TEAMS_URL: 'http://footballbet.com.ua/api/teams/',
		COUNTRIES_FLAGS_URL: 'http://footballbet.com.ua/teams/country/',
		CHAMPIONSHIPS_EMBLEMS_URL: 'http://footballbet.com.ua/table/embl/',
		TEAMS_EMBLEMS_URL: 'http://footballbet.com.ua/teams/embl/'
});