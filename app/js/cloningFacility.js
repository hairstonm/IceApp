var CloningFacility = function(battle) {
  this.receiveEvent = function(message) {
    return battle.loadNewAttacker(new CombatParty(10, 10, Mediator.getInstance(), "Redshirt"+Math.floor(Math.random()*100)+1, "attacker"));
  }
}
