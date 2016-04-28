describe("game", function(){
	var game;
	var arena;
	var redshirt;

	beforeEach(function(){
		arena = td.object('Arena');
		game = new Game(arena);
	});

	it("evaluateCombat is called when game increments", function(){
		game.increment();

		td.verify(arena.evaluateCombat());
	});

	it("starts a mission", function(){
		game.startMission();

		td.verify(arena.activate());
	});

	it("stops a mission", function(){
		game.stopMission();

		td.verify(arena.deactivate());
	});

	it("researches new armor", function(){
		game.research("armor");

		td.verify(researchFacility.activate("armor"));
	});
});
