var Game = function(mediator, arena){
	this.arena = arena;

	this.increment = function(){
		arena.evaluateCombat();
	};

	this.startMission = function(){
		console.log("game starts mission")
		arena.activate();
		this.increment();
	}
}