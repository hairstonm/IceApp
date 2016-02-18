var Mediator = function(){
	var target;

	this.registerListener = function(listener, messageType){
		target = listener;
	};

	this.sendEvent = function(){
		target.receiveEvent();
	};
}