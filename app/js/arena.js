var Arena = function(openArena, closedArena, attacker, defender){
	this.currentArena = closedArena;

	this.evaluateCombat = function(){
		console.log(defender);
		this.currentArena.evaluateCombat(attacker, defender);
	};

	this.activate = function(){
		this.currentArena = openArena;
	}

	this.deactivate = function(){
		this.currentArena = closedArena;
	}
};