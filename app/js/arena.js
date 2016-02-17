var Arena = function(openArena, attacker, defender){
	this.currentArena;

	this.evaluateCombat = function(){
		this.currentArena.evaluateCombat(attacker, defender);
	};

	this.activate = function(){
		this.currentArena = openArena;
	}
};