describe("arena", function(){
	var arena;
	var attacker;
	var defender;
	var openArena;

	beforeEach(function(){
		openArena = td.object('OpenArena');
		attacker = td.object('Combatant');
		arena = new Arena(openArena, attacker, defender);
	});

	it("activates an open arena", function(){
		arena.activate();

		arena.evaluateCombat(attacker, defender);
		
		td.verify(openArena.evaluateCombat(attacker, defender));
	});
});
