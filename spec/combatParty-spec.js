describe("CombatParty", function(){
	var attacker;
	var defender;
	var mediator;
	var baseDamage;
	var attackerType;
	var defenderType;

	beforeEach(function(){
		baseDamage = 5;
		baseHealth = 15;
		attackerType = "attacker"
		defenderType = "defend"
		mediator = td.object('Mediator');
		attacker = new CombatParty(baseDamage, baseHealth, mediator,'Redshirt', attackerType);
		defender = new CombatParty(baseDamage, baseHealth, mediator,"Kraken", defenderType);

	});

	it("Defender is attacked!!!", function(){
		defender = td.object("CombatParty");
		var captor = td.matchers.captor()
		attacker.attack(defender);
		td.verify(defender.receiveAttack(captor.capture()));
		expect(captor.value).toEqual(baseDamage);

	});

	it("Broadcasts attack to mediator", function(){
		var captor = td.matchers.captor();
		attacker.attack(defender);
		td.verify(mediator.sendEvent(attackerType+"Attack",captor.capture()));
		expect(captor.value.damage).toEqual(5);
	});

	it("Broadcasts receiving attack", function(){
		var captor = td.matchers.captor();
		attacker.receiveAttack(baseDamage);

		td.verify(mediator.sendEvent(attackerType+"Defend",captor.capture()));
		expect(captor.value.damage).toEqual(5);
	});

	it("reports the type of the attacker", function(){
		var captor = td.matchers.captor();
		attacker.attack(defender);

		td.verify(mediator.sendEvent(attackerType+"Attack",captor.capture()));
		expect(captor.value.name).toEqual("Redshirt");
	});

	it("reports the type of the defender", function(){
		var captor = td.matchers.captor();
		attacker.receiveAttack(baseDamage);

		td.verify(mediator.sendEvent(attackerType+"Defend",captor.capture()));
		expect(captor.value.name).toEqual("Redshirt");
	});

	it("sends attackerDeath message when attacker dies", function() {
		var captor = td.matchers.captor();
		attacker.receiveAttack(baseDamage * 100);

		td.verify(mediator.sendEvent(attackerType+"Death", captor.capture()));
		expect(captor.value.type).toEqual("Redshirt");
	});

	it("sends defenderDeath message when defender dies", function(){
		var captor = td.matchers.captor();
		defender.receiveAttack(baseDamage * 9000);

		td.verify(mediator.sendEvent(defenderType+ "Death", captor.capture()));
		expect(captor.value.type).toEqual("Kraken");
	});

	it("sends healthMessage when it takes damage", function(){
		var captor = td.matchers.captor();
		defender.receiveAttack(baseDamage * 2);

		td.verify(mediator.sendEvent(defenderType+ "Health", captor.capture()));
		expect(captor.value.health).toEqual(5);
	})
});
