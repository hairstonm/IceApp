describe("game", function(){
	var game;
	var arena;
	var redshirt;

	var mediator;
	beforeEach(function(){
		arena = jasmine.createSpyObj('arena',['evaluateCombat','activate']);		
		game = new Game(mediator, arena);
	});

	it("evaluateCombat is called when game increments", function(){
		game.increment();
		expect(arena.evaluateCombat).toHaveBeenCalled();
	});

	it("starts a mission", function(){
		game.startMission(); 
		expect(arena.activate).toHaveBeenCalled();
	});
});