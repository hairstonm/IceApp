var Game = function(arena){
	this.arena = arena;
	
	this.increment = function(){
		arena.evaluateCombat();
	};
}