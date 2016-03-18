describe('OpenArena', function(){
	var arena;
	var attacker;
	var defender;

	beforeEach(function(){
		arena = new OpenArena();
		attacker = td.object('CombatParty');
		defender = td.object('CombatParty');
	});

	it("evaluates combat where attacker deals damage", function(){
		arena.evaluateCombat(attacker, defender);
		td.verify(attacker.attack(defender));
	});

	it("evaluates combat where defender deals damage", function(){
		arena.evaluateCombat(attacker, defender);
		td.verify(defender.attack(attacker));
	});
});