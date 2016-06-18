var Bestiary = function (randomizer, battle) {

   this.receiveEvent = function (message) {
      var newCombatParty = function () {
         var bestiary = [new CombatParty(10, 15, Mediator.getInstance(), "Kraken", 'villian'),
            new CombatParty(5, 38, Mediator.getInstance(), "PuppyMonkeyBaby", 'villian'),
            new CombatParty(15, 29, Mediator.getInstance(), "ChickenWomanDuckThing", 'villian'),
            new CombatParty(6, 41, Mediator.getInstance(), "CJJJM", 'villian'),
            new CombatParty(1, 22, Mediator.getInstance(), "Trump", 'villian')];
         return bestiary[randomizer.randomize(bestiary.length)];
      }
      var villian = newCombatParty();
      this.scope.villianName = villian.partyName;
      this.scope.villianHealth = villian.health;
      this.scope.villianMaxHealth = villian.health;
      battle.loadNewDefender(villian);
   }
}
