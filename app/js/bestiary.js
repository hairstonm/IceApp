var Bestiary = function(randomizer){
  this.newCombatParty = function(){
    var bestiary = [new CombatParty(10, 15, this.scope.mediator, "Kraken"),
                    new CombatParty(5, 10, this.scope.mediator, "PuppyMonkeyBaby"),
                    new CombatParty(15, 25, this.scope.mediator, "ChickenWomanDuckThing"),
                    new CombatParty(6, 18, this.scope.mediator, "CJJJM"),
                    new CombatParty(1, 1, this.scope.mediator, "Trump")];
    return bestiary[randomizer.randomize(bestiary)];
  }
}
