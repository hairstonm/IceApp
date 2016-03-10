var Arena = function(openArena, closedArena, attacker, defender){
	this.currentArena = closedArena;

	this.evaluateCombat = function(){
		this.currentArena.evaluateCombat(attacker, defender);
	};

	this.activate = function(){
		this.currentArena = openArena;
	}
};