var OpenArena = function(){

	this.evaluateCombat = function(attacker, defender){
		console.log("Combat is evaluated!")
		attacker.attack(defender);
		defender.receiveAttack();
	};
};