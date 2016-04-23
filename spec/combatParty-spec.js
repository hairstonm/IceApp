describe("CombatParty", function(){
	var attacker;
	var defender;
	var mediator;
	var baseDamage;

	beforeEach(function(){
		baseDamage = 5;
		baseHealth = 15;
		mediator = td.object('Mediator');
		attacker = new CombatParty(baseDamage, baseHealth, mediator,'Redshirt', "attacker");
		defender = new CombatParty(baseDamage, baseHealth, mediator,"Kraken", "defender");
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
		attacker.receiveAttack(baseDamage);

		td.verify(mediator.sendEvent("defend",captor.capture()));
		expect(captor.value.type).toEqual("Redshirt");
	});

	// it("sends death message when combat party dies", function(){
	// 	var captor = td.matchers.captor();
	// 	attacker.receiveAttack(baseDamage*10);
	//
	// 	td.verify(mediator.sendEvent("dead", captor.capture()));
	// 	expect(captor.value.type).toEqual("Redshirt");
	// });

	it("sends attackerDeath message when attacker dies", function() {
		var captor = td.matchers.captor();
		attacker.receiveAttack(baseDamage * 100);

		td.verify(mediator.sendEvent("attackerDeath", captor.capture()));
		expect(captor.value.type).toEqual("Redshirt");
	});

	it("sends defenderDeath messafe when defender dies", function(){
		var captor = td.matchers.captor();
		defender.receiveAttack(baseDamage * 9000);

		td.verify(mediator.sendEvent("defenderDeath", captor.capture()));
		expect(captor.value.type).toEqual("Kraken");
	});
});
