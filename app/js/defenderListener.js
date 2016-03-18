var DefenderListener = function(){
	this.receiveEvent = function(message){
		this.scope.missionLog.push("Received "+ message.damage + " points of damage");
	}
}