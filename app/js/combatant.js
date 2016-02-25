var Combatant = function(mediator){
	this.attack = function(defender){
		defender.receiveAttack();
		mediator.sendEvent("attack","attack");
	};

	this.receiveAttack = function(){
		mediator.sendEvent("defend","defend");
	};
};