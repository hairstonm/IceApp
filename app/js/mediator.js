var Mediator = (function() {
  var listeners = {};
  var instance;

  function createInstance() {
    var mediator = {
      registerListener: function(messageType, listener) {
      if (messageType in listeners) {
					listeners[messageType].push(listener);
			  } else {
					listeners[messageType] = new Array(listener);
				}
      },

      sendEvent: function(messageType, message) {
				listeners[messageType].forEach(function(listener){
					listener.receiveEvent(message);
				});
      }

    }
    return mediator;
  };


  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }

  };
})();
