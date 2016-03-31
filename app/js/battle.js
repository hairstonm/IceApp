var Battle = function(attacker, defender, combatPartyFactory){
  this.attacker = attacker;
  this.defender = defender;
  this.combatPartyFactory = combatPartyFactory;

  this.evaluateCombat = function(){
    attacker.attack(defender);
    defender.attack(attacker);
  };

  this.loadNewDefender = function(){
    defender = combatPartyFactory.newCombatParty();
  };
};
