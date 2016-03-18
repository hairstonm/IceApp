var CombatParty = function(baseDamage, mediator){
	this.attack = function(defender){
		mediator.sendEvent("attack",{damage:baseDamage});
		defender.receiveAttack(baseDamage);
	};

	this.receiveAttack = function(baseDamage){
		mediator.sendEvent("defend",{damage : baseDamage});
	};
};