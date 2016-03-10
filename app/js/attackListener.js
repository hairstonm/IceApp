var AttackListener = function(){
	this.receiveEvent = function(message){
	this.scope.missionLog.push(message);
	}
};