var CloningFacility = function(battle) {
  var basehealth = 10;
  var baseAttack = 10;
  this.receiveEvent = function(message) {
    return battle.loadNewAttacker(new CombatParty(baseHealth, baseAttack, Mediator.getInstance(), "Redshirt"+Math.floor(Math.random()*100)+1, "attacker"));
  }
}
