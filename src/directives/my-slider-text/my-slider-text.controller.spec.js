describe('MySliderTextCtrl test', function() {
	var $scope;

	beforeEach(module("footballApp"));

	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();

		$controller("MySliderTextCtrl", {
			$scope: $scope
		});
	}));

	describe('next function test', function() {
		it('should select next slide', function() {
			$scope.titles = [1, 2];
			$scope.next();
			expect($scope.slideIndex).toEqual(1);
			$scope.next();
			expect($scope.slideIndex).toEqual(0);
		});
		it("shouldn't select slide", function() {
			$scope.titles = [];
			$scope.next();
			expect($scope.slideIndex).toEqual(0);
		});
	});

	describe('previous function test', function() {
		it('should select latest slide', function() {
			$scope.slideIndex = 0;
			$scope.titles = [1, 2];
			$scope.previous();
			expect($scope.slideIndex).toEqual(1);
		});
		it("should previous slide", function() {
			$scope.slideIndex = 1;
			$scope.titles = [1, 2];
			$scope.previous();
			expect($scope.slideIndex).toEqual(0);
		});
	});

});