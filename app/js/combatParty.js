var CombatParty = function(baseDamage, mediator, type){
	this.attack = function(defender){
		mediator.sendEvent("attack", new AttackMessage(baseDamage, type));
		defender.receiveAttack(baseDamage);
	};

	this.receiveAttack = function(baseDamage){
		mediator.sendEvent("defend",{damage : baseDamage});
	};
};