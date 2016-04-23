var CloningFacility = function(battle) {
  this.receiveEvent = function(message) {
    return battle.loadNewAttacker(new CombatParty(10, 5, Mediator.getInstance(), "Redshirt", "attacker"));
  }
}
