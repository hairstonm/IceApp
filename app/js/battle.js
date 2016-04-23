var Battle = function(attacker, defender, bestiary){
  this.attacker = attacker;
  this.defender = defender;
  this.bestiary = bestiary;

  this.evaluateCombat = function(){
    attacker.attack(defender);
    defender.attack(attacker);
  };

  this.loadNewDefender = function(){
    defender = bestiary.newCombatParty();
  };
};
