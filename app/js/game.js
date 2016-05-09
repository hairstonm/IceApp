var Game = function(arena, researchFacility, accumulator){
	this.arena = arena;
	this.researchFacility = researchFacility;
	this.accumulator = accumulator;

	this.increment = function(){
		arena.evaluateCombat();
		generateResources();
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

	this.generateResources = function(){
		accumulator.generateScience(researchFacility.scientists);
	}
}
