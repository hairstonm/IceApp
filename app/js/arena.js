var Arena = function(openArena, closedArena, battle){
	this.currentArena = closedArena;

	this.evaluateCombat = function(){
		this.currentArena.evaluateCombat(battle);
	};

	this.activate = function(){
		this.currentArena = openArena;
	}

	this.deactivate = function(){
		this.currentArena = closedArena;
	}
};
