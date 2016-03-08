var Mediator = function(){
	var listeners = {};
	this.registerListener = function(messageType, listener){
		listeners[messageType] = listener
	};

	this.sendEvent = function(messageType, message){
		listeners[messageType].receiveEvent(message);
	};
}