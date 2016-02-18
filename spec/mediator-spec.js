describe("mediator", function(){
	var mediator;
	var listener;

	beforeEach(function(){
		mediator = new Mediator();
		listener = {
			receiveEvent : function(){}
		};
	});

	it("sends a message to the listeners", function(){
		mediator.registerListener(listener, "attack");
		mediator.sendEvent();
		expect(listener.receiveEvent).toHaveBeenCalled();
	});
});	