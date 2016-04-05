var CombatPartyFactory = function(mediator){
  this.mediator = mediator;
  this.newCombatParty = function(){
    return new CombatParty(1, 2, mediator, "hello");
  }
}
