describe("attacker", function(){
	var attacker;
	var defender;
	var mediator;

	beforeEach(function(){
		mediator = {
			sendEvent : function(){}
		};
		attacker = new Combatant(mediator);
		defender = {
			receiveAttack : function(){}
		};

		spyOn(defender, 'receiveAttack');
		spyOn(mediator, 'sendEvent');
	});

	it("Defender is attacked!!!", function(){
		attacker.attack(defender);
		expect(defender.receiveAttack).toHaveBeenCalled();
	});

	it("Broadcasts attack to mediator", function(){
		attacker.attack(defender);
		expect(mediator.sendEvent).toHaveBeenCalled();
	});

	it("Broadcasts receiving attack", function(){
		attacker.receiveAttack();
		expect(mediator.sendEvent).toHaveBeenCalled();
	});
});

