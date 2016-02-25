describe("attacker", function(){
	var attacker;
	var defender;
	var mediator;

	beforeEach(function(){
		mediator = td.object('Mediator');
		attacker = new Combatant(mediator);
		defender = td.object('Combatant');
	});

	it("Defender is attacked!!!", function(){
		attacker.attack(defender)
		td.verify(defender.receiveAttack())
	});

	it("Broadcasts attack to mediator", function(){
		attacker.attack(defender)
		td.verify(mediator.sendEvent("attack","attack"))
	});

	it("Broadcasts receiving attack", function(){
		attacker.receiveAttack()
		td.verify(mediator.sendEvent("defend","defend"))
	});
});

