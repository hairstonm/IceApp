var AttackListener = function(){
	this.receiveEvent = function(message){
		this.scope.missionLog.push(message.type + " attacked for "+ message.damage + " points of damage");
	}
};