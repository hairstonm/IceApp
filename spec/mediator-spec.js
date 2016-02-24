describe("mediator", function(){
	var mediator;
	var attackListener;

	beforeEach(function(){
		mediator = new Mediator();
		attackListener = td.object('AttackListener')
		defendListener = td.object('DenfendListener')
	});

	it("sends a message to the listeners", function(){
		mediator.registerListener(attackListener, "attack")
		mediator.registerListener(defendListener, "defend")
		mediator.sendEvent("attack")
		mediator.sendEvent("defend")
		td.verify(attackListener.receiveEvent())
		td.verify(defendListener.receiveEvent())
	});
});	