describe("game", function(){
	var game;
	var arena;
	var redshirt;

	beforeEach(function(){
		arena = jasmine.createSpyObj('arena',['evaluateCombat','activate']);
		arena.activate.and.callFake(function(){
			
		});
		
		game = new Game(arena);
	});

	describe("evaluateCombat is called when game increments", function(){
		When(function(){ game.increment(); });
		Then(function(){ expect(arena.evaluateCombat).toHaveBeenCalled();});
	});

	describe("starts a mission", function(){
		When(function(){ game.startMission(); });
		Then(function(){ expect(arena.activate).toHaveBeenCalled();});
	});
});