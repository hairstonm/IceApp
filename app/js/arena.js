var Arena = function(){
	this.evaluateCombat = function(attacker,defender){
		attacker.attack(defender);
	};
};