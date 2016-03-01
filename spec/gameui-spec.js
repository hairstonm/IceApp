describe("Game UI ", function(){

	beforeEach(function(){
		module('app');
});
	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

		it('starts mission', function(){
			var $scope = {};
			$scope.game = td.object('Game');
			$scope.startMission();

			td.verify($scope.game.startMission());	
		});
		
});