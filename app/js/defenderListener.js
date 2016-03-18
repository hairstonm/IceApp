var DefenderListener = function(){
	this.receiveEvent = function(message){
		this.scope.missionLog.push(message.type + " received "+ message.damage + " points of damage");
	}
}