var Game = function(mediator, arena){
	this.arena = arena;

	this.increment = function(){
		arena.evaluateCombat();
	};

	this.startMission = function(){
		arena.activate();
		this.increment();
	}
}