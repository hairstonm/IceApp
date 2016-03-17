var CombatParty = function(baseDamage, mediator){
	this.attack = function(defender){
		mediator.sendEvent("attack",{damage:baseDamage});
		defender.receiveAttack();
	};

	this.receiveAttack = function(){
		mediator.sendEvent("defend","defend");
	};
};