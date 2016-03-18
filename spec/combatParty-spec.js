describe("attacker", function(){
	var attacker;
	var defender;
	var mediator;
	var baseDamage; 
	beforeEach(function(){
		baseDamage = 5;
		mediator = td.object('Mediator');
		attacker = new CombatParty(baseDamage,mediator,'Redshirt');
		defender = td.object('CombatParty');
	});

	it("Defender is attacked!!!", function(){
		attacker.attack(defender);
		td.verify(defender.receiveAttack(baseDamage));
	});

	it("Broadcasts attack to mediator", function(){
		var captor = td.matchers.captor();
		attacker.attack(defender);
		td.verify(mediator.sendEvent("attack",captor.capture()));
		expect(captor.value.damage).toEqual(5);
	});

	it("Broadcasts receiving attack", function(){
		var captor = td.matchers.captor();
		attacker.receiveAttack(baseDamage);
		td.verify(mediator.sendEvent("defend",captor.capture()));
		expect(captor.value.damage).toEqual(5);
	});

	it("reports the type of the attacker", function(){
		var captor = td.matchers.captor();
		attacker.attack(defender);
		td.verify(mediator.sendEvent("attack",captor.capture()));
		expect(captor.value.type).toEqual("Redshirt");
	});

	it("reports the type of the defender", function(){
		var captor = td.matchers.captor();
		attacker.receiveAttack(defender);
		td.verify(mediator.sendEvent("defend",captor.capture()));
		expect(captor.value.type).toEqual("Redshirt");
	});
});