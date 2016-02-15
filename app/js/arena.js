var Arena = function(openArena){
	this.currentArena;

	this.evaluateCombat = function(attacker,defender){
		attacker.attack(defender);
	};
	this.activate = function(){
		this.currentArena = openArena;
	}
};