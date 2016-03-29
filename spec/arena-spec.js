describe("arena", function(){
	var arena;
	var openArena;
	var closedArena;
	var battle;

	beforeEach(function(){
		openArena = td.object('OpenArena');
		closedArena = td.object('ClosedArena');
		battle = td.object('Battle')
		arena = new Arena(openArena, closedArena, battle);
	});

	it("activates an open arena", function(){
		arena.activate();

		arena.evaluateCombat(battle);

		td.verify(openArena.evaluateCombat(battle));
	});

	it("starts with a closed arena", function(){
		arena.evaluateCombat(battle);

		td.verify(closedArena.evaluateCombat(battle));
	});

	it("deactivates an open arena", function(){
		arena.activate();
		arena.evaluateCombat(battle);

		td.verify(openArena.evaluateCombat(battle));

		arena.deactivate();
		arena.evaluateCombat(battle);

		td.verify(closedArena.evaluateCombat(battle));
	})
});
