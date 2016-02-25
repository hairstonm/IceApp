var Mediator = function(){
	var listeners = {};
	this.registerListener = function(listener, messageType){
		listeners[messageType] = listener
	};

	this.sendEvent = function(messageType, message){
		listeners[messageType].receiveEvent(message);
	};
}