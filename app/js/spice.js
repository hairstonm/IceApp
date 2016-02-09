var Arena = function(){
	this.evaluateCombat = function(){};
};

var Game = function(arena){
	this.arena = arena;
	this.increment = function(){
		arena.evaluateCombat();
	};
}