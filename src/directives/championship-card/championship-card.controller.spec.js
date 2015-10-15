describe('ChampionshipCardCtrl test', function() {
	var $scope;

	beforeEach(module("footballApp"));

	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();

		$controller("ChampionshipCardCtrl", {
			$scope: $scope
		});
	}));

	describe('sort function test', function() {
		it('reverse variable', function() {
			$scope.sort();
			expect($scope.reverse).toBeTruthy();
			$scope.sort();
			expect($scope.reverse).toBeFalsy();
		});
		it('sortField variable', function() {
			expect($scope.sortField).toBeFalsy();
			$scope.sort();
			expect($scope.sortField).toEqual('name');
		})
	});

	it('goBack function test', function() {
		$scope.goBack();
		expect($scope.teamCard).toBeFalsy();
		$scope.sortField = true;
		$scope.goBack();
		expect($scope.teamCard).toBeFalsy();
	});

	describe('selectTeam function test', function() {
		var team = {
			city: "",
			coach: "Жозе Моуріньйо",
			emblema: "chelsi.gif",
			foundation_year: "1905",
			home_stadion: "Stamford Bridge",
			id_championship: "4",
			id_teams: "101",
			name: "Челсі",
			off_site: "http://www.chelseafc.com/",
			president: "Роман Абрамович",
			second_name: "",
			title: "<p style='text-align: justify;'><strong>Кубок Ліги(2): </strong>1963, 2011</p>"
		};
		var italianTeam = {
			city: "Турин",
			coach: "Джампьєро Вентура",
			emblema: "torino.gif",
			foundation_year: "1906",
			home_stadion: "Stadio Olimpico di Torino",
			id_championship: "7",
			id_teams: "169",
			name: "Торіно",
			off_site: "http://www.torinofc.it/",
			president: "Урбано Каіро",
			second_name: "",
			title: "<p style='text-align: left;'><strong>Серія А:</strong></p><p style='text-align: left;'>1926-27, 1927-28, 1942-43, 1945-46, 1946-47, 1947-48, 1948-49, 1975-76</p><p style='text-align: left;'><strong>Кубок Італії:</strong></p><p style='text-align: left;'>1935-36, 1942-43, 1967-68,  1970-71, 1992-93</p>"
		};
		it('teamCard variable', function() {
			$scope.selectTeam(team);
			expect($scope.teamCard).toBeTruthy();
		});
		it('should parse title of team', function() {
			$scope.selectTeam(team);
			console.log($scope.team.parsedTitle);
			expect($scope.team.parsedTitle).toEqual(['<p><strong>Кубок Ліги(2): </strong>1963, 2011</p>']);
		});
		it('should parse title of italian team', function() {
			$scope.selectTeam(italianTeam);

			expect($scope.team.parsedTitle).toEqual([ '<strong>Серія А:</strong>1926-27, 1927-28, 1942-43, 1945-46, 1946-47, 1947-48, 1948-49, 1975-76', '<strong>Кубок Італії:</strong>1935-36, 1942-43, 1967-68,  1970-71, 1992-93' ]);
		})
	});
});