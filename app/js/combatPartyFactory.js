var CombatPartyFactory = function(){

  this.newCombatParty = function(){
    return new CombatParty(10, 15, this.scope.mediator, "Kraken");
  }
}
