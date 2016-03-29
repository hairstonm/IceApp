describe('OpenArena', function(){
	var arena;
	var attacker;
	var defender;

	beforeEach(function(){
		arena = new OpenArena();
		attacker = td.object('CombatParty');
		defender = td.object('CombatParty');
		battle = td.object('Battle');
	});

	it("evaluates combat in a battle", function(){
		arena.evaluateCombat(battle);
		td.verify(battle.evaluateCombat());
	});
});
