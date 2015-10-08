angular.module('footballApp')
	.controller('FootballCtrl', ['$scope', 'FootballAppService', function($scope, FootballAppService){
		FootballAppService.getChampionships().then(function(championships) {
			console.log(championships);
			$scope.championships = championships;
		});
	}]);
