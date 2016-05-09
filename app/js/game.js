var Game = function(arena, researchFacility){
	this.arena = arena;
	this.researchFacility = researchFacility;

	this.increment = function(){
		arena.evaluateCombat();
		researchFacility.generateScience();
	};

	this.startMission = function(){

		arena.activate();
	};

	this.stopMission = function(){
		arena.deactivate();
	};

	this.research = function(researchType){
		researchFacility.activate(researchType);
	};
}
