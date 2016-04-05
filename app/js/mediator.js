var Mediator = (function(){
	var listeners = {};
	var instance;

	function createInstance(){
		var mediator = {

			registerListener: function(messageType, listener){
				listeners[messageType] = listener;
			},

			sendEvent: function(messageType, message){
				listeners[messageType].receiveEvent(message);
			}

		}
		return mediator;
	};


	return {
		getInstance: function(){
			if (!instance) {
	      instance = createInstance();
	    }
	      return instance;
		}

	};
})();
