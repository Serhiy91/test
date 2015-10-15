describe('main controller', function() {
	var responseC = [
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
	var responseT = [
		{
			city: "Харків",
			coach: "Ігор Рахаєв",
			emblema: "metalist.gif",
			foundation_year: "1926",
			home_stadion: "OSK Metalist",
			id_championship: "1",
			id_teams: "88",
			name: "Металіст",
			off_site: "http://www.metalist.ua",
			president: "Сергій Курченко",
			second_name: ""
		},
		{
			city: "Київ",
			coach: "-",
			emblema: "obolon.gif",
			foundation_year: "1992",
			home_stadion: "Obolon",
			id_championship: "1",
			id_teams: "267",
			name: "Оболонь",
			off_site: "http://www.fc.obolon.ua",
			president: "-",
			second_name: ""
		}
	];
	var $scope, footballAppService, mainCtrl, footballAppConstants;
	beforeEach(module("footballApp"));

	beforeEach(inject(function($rootScope, _FootballAppService_, _footballAppConstants_, $controller, $httpBackend){
		$scope = $rootScope.$new();
		footballAppService = _FootballAppService_;
		footballAppConstants = _footballAppConstants_;

		$httpBackend.when('GET', 'http://footballbet.com.ua/api/championships/')
			.respond(responseC);
		$httpBackend.when('GET', 'http://footballbet.com.ua/api/teams/')
			.respond(responseT);

		mainCtrl = $controller("FootballCtrl", {
			$scope: $scope,
			FootballAppService: footballAppService
		});
		$httpBackend.flush();
	}));

	it('should set data to', function() {
		expect($scope.championships).toEqual(response);
	});
});
