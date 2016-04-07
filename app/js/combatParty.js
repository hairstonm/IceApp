var CombatParty = function(baseDamage, baseHealth, type){
	this.attack = function(defender){
		debugger;
		this.scope.mediator.sendEvent("attack", new AttackMessage(baseDamage, type));
		defender.receiveAttack(baseDamage);
	};

	this.receiveAttack = function(baseDamage){
		this.health -= baseDamage;
		if(this.health <= 0){
			this.scope.mediator.sendEvent("dead", new DeathMessage(type));
		}
		else {
			this.scope.mediator.sendEvent("defend", new AttackMessage(baseDamage, type));
		};
	};
	this.health = baseHealth;
};
