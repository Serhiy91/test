angular.module('footballApp')
	.controller('FootballCtrl', ['$scope', 'FootballAppService', 'footballAppConstants',
		function($scope, FootballAppService, footballAppConstants){
		FootballAppService.getChampionships().then(function(championships) {
			console.log(championships);
			$scope.championships = championships;
			$scope.image = footballAppConstants.CHAMPIONSHIPS_EMBLEMS_URL;
		});
	}]);
