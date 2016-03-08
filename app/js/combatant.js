var Combatant = function(mediator){
	this.attack = function(defender){
		mediator.sendEvent("attack","attack");
		defender.receiveAttack();
	};

	this.receiveAttack = function(){
		mediator.sendEvent("defend","defend");
	};
};