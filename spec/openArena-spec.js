describe('OpenArena', function(){
	var arena;
	var redshirt;
	var defender;

	beforeEach(function(){
		arena = new OpenArena();
		redshirt = td.object('CombatParty');
		defender = td.object('CombatParty');
	});

	it("evaluates combat where Redshirts attack!!!", function(){
		arena.evaluateCombat(redshirt, defender);
		td.verify(redshirt.attack(defender));
	});
});