var Game = function(arena){
	this.arena = arena;
	this.inMission = false;

	this.increment = function(){
		if (this.inMission){
			arena.evaluateCombat();
		}
	};

	this.startMission = function(){
		this.inMission = true;
	}
}