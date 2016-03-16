describe("arena", function(){
	var arena;
	var attacker;
	var defender;
	var openArena;
	var closedArena;

	beforeEach(function(){
		openArena = td.object('OpenArena');
		closedArena = td.object('ClosedArena');
		attacker = td.object('Combatant');
		arena = new Arena(openArena, closedArena, attacker, defender);
	});

	it("activates an open arena", function(){
		arena.activate();

		arena.evaluateCombat(attacker, defender);
		
		td.verify(openArena.evaluateCombat(attacker, defender));
	});

	it("starts with a closed arena", function(){
		arena.evaluateCombat(attacker, defender);

		td.verify(closedArena.evaluateCombat(attacker, defender));
	});

	it("deactivates an open arena", function(){
		arena.activate();
		arena.evaluateCombat(attacker, defender);
		
		td.verify(openArena.evaluateCombat(attacker, defender));
		
		arena.deactivate();
		arena.evaluateCombat(attacker, defender);

		td.verify(closedArena.evaluateCombat(attacker, defender));
	})
});
