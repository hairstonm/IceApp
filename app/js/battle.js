var Battle = function(){
  this.attacker;
  this.defender;

  this.evaluateCombat = function(){
    attacker.attack(defender);
    defender.attack(attacker);
  };

  this.loadNewDefender = function(newDefender){
    defender = newDefender;
  };

  this.loadNewAttacker = function(newAttacker) {
    attacker = newAttacker;
  }
};
