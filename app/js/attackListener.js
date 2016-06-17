var AttackListener = function(){
	this.receiveEvent = function(message){
		if("attacker" == message.type) {
			this.scope.monsterHealth -= message.damage;
		}
		this.scope.missionLog.push(message.name + " attacked for " + message.damage + " points of damage");
	}
};