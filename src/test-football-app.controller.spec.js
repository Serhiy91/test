describe('main controller', function() {
	var responseChampionships = [
		{
			'id_championship': '1',
			'image': 'ukraine.jpg',
			'name': 'Україна',
			'num_order': '6',
			'sename': "Прем'єр-ліга",
			'title': 'ukraine'
		},
		{
			'id_championship': '2',
			'image': 'league-champions.jpg',
			'name': 'Ліга Чемпіонів',
			'num_orde': '11',
			'sename': '',
			'title': 'league-champions'
		}
	];
	var responseTeams = [
		{
			"id_championship": "1",
			"id_teams": "88",
			"name": "Металіст"
		},
		{
			"id_championship": "1",
			"id_teams": "267",
			"name": "Оболонь"
		},
		{
			"id_championship": "3",
			"id_teams": "366",
			"name": "Слован"
		}
	];
	var colectionByChampionships = {
		1: [{
				"id_championship": "1",
				"id_teams": "88",
				"name": "Металіст"
		},
			{
				"id_championship": "1",
				"id_teams": "267",
				"name": "Оболонь"
			}],
		3: [{
			"id_championship": "3",
			"id_teams": "366",
			"name": "Слован"
		}]
	};
	var $scope, footballAppService, deferredChampionships, deferredTeams;
	beforeEach(module("footballApp"));

	beforeEach(inject(function($rootScope, _FootballAppService_, $controller, $q){
		$scope = $rootScope.$new();
		footballAppService = _FootballAppService_;
		deferredChampionships = $q.defer();
		deferredTeams = $q.defer();

		deferredChampionships.resolve(responseChampionships);
		spyOn(footballAppService, 'getChampionships').and.returnValue(deferredChampionships.promise);

		deferredTeams.resolve(responseTeams);
		spyOn(footballAppService, 'getTeams').and.returnValue(deferredTeams.promise);

		$controller("FootballCtrl", {
			$scope: $scope,
			FootballAppService: footballAppService
		});
	}));

	it('should set data to scope', function() {
		$scope.$digest();
		expect($scope.championships).toEqual(responseChampionships);
	});

	it('should create team colection by championships', function() {
		$scope.$digest();
		expect($scope.teamsByChampionship).toEqual(colectionByChampionships);
	});
});
