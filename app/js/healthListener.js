var HealthListener = function(type){

    this.receiveEvent = function(message){
        this.scope[type+"Health"] = message.health;
    };
};