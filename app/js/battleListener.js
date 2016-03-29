var BattleListener = function(){
	this.receiveEvent = function(message){
		this.scope.missionLog.push(message.type + " was killed!");
	}
}
