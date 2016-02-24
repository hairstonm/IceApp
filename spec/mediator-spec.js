describe("mediator", function(){
	var mediator;
	var listener;

	beforeEach(function(){
		mediator = new Mediator();
		listener = {
			receiveEvent : function(){}
		};
		listener = td.object(AttackListener);
	});

	it("sends a message to the listeners", function(){
		mediator.registerListener(listener, "attack");
		mediator.sendEvent();
		td.verify(listener.receiveEvent)

	});

});	