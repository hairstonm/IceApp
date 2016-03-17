var AttackListener = function(){
	this.receiveEvent = function(message){
		this.scope.missionLog.push("Attacked for "+ message.damage + " points of damage");
	}
};