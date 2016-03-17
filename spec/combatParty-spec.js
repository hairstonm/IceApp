describe("attacker", function(){
	var attacker;
	var defender;
	var mediator;

	beforeEach(function(){
		mediator = td.object('Mediator');
		attacker = new CombatParty(5,mediator);
		defender = td.object('CombatParty');
	});

	it("Defender is attacked!!!", function(){
		attacker.attack(defender);
		td.verify(defender.receiveAttack());
	});

	it("Broadcasts attack to mediator", function(){
		var captor = td.matchers.captor();
		attacker.attack(defender);
		td.verify(mediator.sendEvent("attack",captor.capture()));
		expect(captor.value.damage).toEqual(5);
	});

	it("Broadcasts receiving attack", function(){
		attacker.receiveAttack();
		td.verify(mediator.sendEvent("defend","defend"));
	});
});

