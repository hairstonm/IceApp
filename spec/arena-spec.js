describe("arena", function(){
	var arena;
	var openArena;
	var closedArena;

	beforeEach(function(){
		openArena = td.object('OpenArena');
		closedArena = td.object('ClosedArena');

		arena = new Arena(openArena, closedArena);
	});

	it("activates an open arena", function(){
		arena.activate();

		arena.evaluateCombat();

		td.verify(openArena.evaluateCombat());
	});

	it("starts with a closed arena", function(){
		arena.evaluateCombat();

		td.verify(closedArena.evaluateCombat());
	});

	it("deactivates an open arena", function(){
		arena.activate();
		arena.evaluateCombat();

		td.verify(openArena.evaluateCombat());

		arena.deactivate();
		arena.evaluateCombat();

		td.verify(closedArena.evaluateCombat());
	})
});
