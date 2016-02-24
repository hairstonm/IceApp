var OpenArena = function(){

	this.evaluateCombat = function(attacker, defender){
		attacker.attack(defender);
		defender.receiveAttack();
	};
};