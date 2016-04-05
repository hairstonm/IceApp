var CombatPartyFactory = function(){

  this.newCombatParty = function(mediator){
    return new CombatParty(10, 15, mediator, "Kraken");
  }
}
