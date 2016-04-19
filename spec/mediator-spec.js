describe("mediator", function(){
	var mediator;
	var attackListener;
	var deathListener;
	var battleListener;

	beforeEach(function(){
		mediator = Mediator.getInstance();
		attackListener = td.object('AttackListener');
		defendListener = td.object('DefendListener');
		deathListener = td.object('DeathListener');
		battleListener = td.object('BattleListener');
	});

	it("sends a message to the listeners", function(){
		mediator.registerListener("attack",attackListener);
		mediator.registerListener("defend", defendListener);

		mediator.sendEvent("attack", "I attack!!!!");
		mediator.sendEvent("defend", "I received damage!!!");

		td.verify(attackListener.receiveEvent("I attack!!!!"));
		td.verify(defendListener.receiveEvent("I received damage!!!"));
	});

	it("returns a singleton instance of itself", function(){
		var newMediator = Mediator.getInstance();

		expect(newMediator === mediator).toBe(true);
	});

	it("allows multiple listeners to be registered to the same type", function(){
		mediator.registerListener("dead", deathListener);
		mediator.registerListener("dead", battleListener);

		mediator.sendEvent("dead", "DEATH!!!");

		td.verify(deathListener.receiveEvent("DEATH!!!"));
		td.verify(battleListener.receiveEvent("DEATH!!!"));
	});
});
