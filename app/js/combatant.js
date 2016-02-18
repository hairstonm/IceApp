var Combatant = function(mediator){
	this.attack = function(defender){
		defender.receiveAttack();
		mediator.sendEvent();
	};

	this.receiveAttack = function(){
		mediator.sendEvent();
	};
};