var Arena = function(openArena, closedArena){
	this.currentArena = closedArena;

	this.evaluateCombat = function(){
		this.currentArena.evaluateCombat();
	};

	this.activate = function(){
		this.currentArena = openArena;
	}

	this.deactivate = function(){
		this.currentArena = closedArena;
	}
};
