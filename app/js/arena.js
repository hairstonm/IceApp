var Arena = function(openArena, attacker, defender){
	this.currentArena;

	this.evaluateCombat = function(){
		console.log("Combat is evauated in arena!")
		this.currentArena.evaluateCombat(attacker, defender);
	};

	this.activate = function(){
		console.log("Arena is activated!")
		this.currentArena = openArena;
	}
};