var Game = function(arena){
	this.arena = arena;

	this.increment = function(){
		arena.evaluateCombat();
	};

	this.startMission = function(){
		
		arena.activate();
	};

	this.stopMission = function(){
		arena.deactivate();
	};
}
