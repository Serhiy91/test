describe('Football service', function() {
	it('returns championships', function() {
		var $httpBackend, injector, footballAppService, footballAppConstant;

		var response = [
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

		beforeEach(function() {
			module('footballApp');

			inject(function(_FootballAppService_, _footballAppConstant_) {
				injector = $injector;
				footballAppService = _FootballAppService_;
				footballAppConstant = _footballAppConstant_;
				$httpBackend.when('GET', 'http://footballbet.com.ua/api/championships/').respond(response);
			});
		});

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		it('call footballAppService.getChampionships', function() {
			$httpBackend.expectGET('http://footballbet.com.ua/api/championships/');
			expect(footballAppService.getChampionships()).toEqual(response);
			$httpBackend.flush();
		});
	});
});