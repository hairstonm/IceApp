var CombatParty = function (baseDamage, baseHealth, mediator, name, type) {
   this.attack = function (defender) {
      mediator.sendEvent(type + "Attack", new AttackMessage(baseDamage, name, type));
      defender.receiveAttack(baseDamage);
   };

   this.receiveAttack = function (baseDamage) {
      this.health -= baseDamage;
      mediator.sendEvent(type + "Defend", new AttackMessage(baseDamage, name, type));
      mediator.sendEvent(type + "Health", new HealthMessage(this.health));
      if (this.health <= 0) {
         mediator.sendEvent(type + "Death", new DeathMessage(name));
      };
   };
   this.health = baseHealth;
   this.partyName = name;
};
