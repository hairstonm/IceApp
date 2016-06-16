var CombatParty = function (baseDamage, baseHealth, mediator, name, type) {
   this.attack = function (defender) {
      mediator.sendEvent("attack", new AttackMessage(baseDamage, name));
      defender.receiveAttack(baseDamage);
   };

   this.receiveAttack = function (baseDamage) {
      this.health -= baseDamage;
      if (this.health <= 0) {
         mediator.sendEvent(type + "Death", new DeathMessage(name));
      }
      else {
         mediator.sendEvent("defend", new AttackMessage(baseDamage, name, type));
      }
      ;
   };
   this.health = baseHealth;
   this.partyName = name;
};
