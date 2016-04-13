var CombatParty = function(baseDamage, baseHealth, mediator, type){
	this.attack = function(defender){
		mediator.sendEvent("attack", new AttackMessage(baseDamage, type));
		defender.receiveAttack(baseDamage);
	};

	this.receiveAttack = function(baseDamage){
		this.health -= baseDamage;
		if(this.health <= 0){
			mediator.sendEvent("dead", new DeathMessage(type));
			mediator.sendEvent("battle", function(){});
		}
		else {
		 mediator.sendEvent("defend", new AttackMessage(baseDamage, type));
		};
	};
	this.health = baseHealth;
};
