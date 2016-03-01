describe("Game UI ", function(){


	beforeEach(function(){
		module('app');
	});

	beforeEach(inject(function($controller,$rootScope){
		 this.scope = $rootScope.$new();
		 this.game = td.object('Game');
		$controller('GameController',{
			$scope: this.scope,
			game: this.game
		});
	}));

	it('starts mission', function(){
		this.scope.startMission();
		td.verify(this.game.startMission());	
	});
});