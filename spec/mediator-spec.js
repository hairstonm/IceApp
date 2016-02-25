describe("mediator", function(){
	var mediator;
	var attackListener;

	beforeEach(function(){
		mediator = new Mediator();
		attackListener = td.object('AttackListener')
		defendListener = td.object('DefendListener')
	});

	it("sends a message to the listeners", function(){
		mediator.registerListener(attackListener, "attack")
		mediator.registerListener(defendListener, "defend")

		mediator.sendEvent("attack", "I attack!!!!")
		mediator.sendEvent("defend", "I received damage!!!")
		
		td.verify(attackListener.receiveEvent("I attack!!!!"))
		td.verify(defendListener.receiveEvent("I received damage!!!"))
	});
});	