var Attacker = function(){
	this.attack = function(defender){
		defender.receiveAttack();
	};
};