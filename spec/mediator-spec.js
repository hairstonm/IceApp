describe("mediator", function(){
	var mediator;
	var attackListener;

	beforeEach(function(){
		mediator = Mediator.getInstance();
		attackListener = td.object('AttackListener');
		defendListener = td.object('DefendListener');
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
});
