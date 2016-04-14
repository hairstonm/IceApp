describe('OpenArena', function(){
	var arena;
	var attacker;
	var defender;

	beforeEach(function(){
		battle = td.object('Battle');
		arena = new OpenArena(battle);
		attacker = td.object('CombatParty');
		defender = td.object('CombatParty');
	});

	it("evaluates combat in a battle", function(){
		arena.evaluateCombat();
		td.verify(battle.evaluateCombat());
	});
});
