describe("game", function(){
	var game;
	var arena;
	var redshirt;
	var mediator;

	beforeEach(function(){
		arena = td.object('Arena');
		game = new Game(mediator, arena);
	});

	it("evaluateCombat is called when game increments", function(){
		game.increment();
		
		td.verify(arena.evaluateCombat());
	});

	it("starts a mission", function(){
		game.startMission(); 

		td.verify(arena.activate());
	});
});