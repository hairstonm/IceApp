var OpenArena = function(battle){
	this.battle = battle;
	
	this.evaluateCombat = function(){
		this.battle.evaluateCombat();
	};
};
