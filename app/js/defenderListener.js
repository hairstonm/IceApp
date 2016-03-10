var DefenderListener = function(){
	this.receiveEvent = function(message){
		this.scope.missionLog.push(message);
	}
}