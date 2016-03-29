var Battle = function(attacker, defender){
  this.attacker = attacker;
  this.defender = defender;

  this.evaluateCombat = function(){
    attacker.attack(defender);
    defender.attack(attacker);
  };

  this.loadNewDefender = function(newDefender){
    defender = newDefender;
  };
};
