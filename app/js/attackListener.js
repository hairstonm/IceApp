var AttackListener = function(type){
	this.receiveEvent = function(message){
		this.scope.missionLog.push(message.name + " attacked for " + message.damage + " points of damage");
	}
};