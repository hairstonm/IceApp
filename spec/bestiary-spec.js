describe("Bestiary", function () {
   var bestiary;
   var mediator;
   var $rootScope;
   var $scope;
   var battle;

   beforeEach(inject(function ($rootScope) {
      randomizer = {
         randomize: function () {
            return 3
         }
      }
      battle = td.object("Battle");
      bestiary = new Bestiary(randomizer, battle);
      bestiary.scope = $rootScope.$new();
   }));

   it("creates a new Combat Party when it receives an event", function () {
      var combatParty = bestiary.receiveEvent();

      td.verify(battle.loadNewDefender(td.matchers.anything()));
   });

   it("adds monster name to page", function () {
      var combatParty = bestiary.receiveEvent();

      expect(bestiary.scope.monsterName).toEqual("CJJJM");
   });
   
   it("adds monster health to page", function () {
      var combatParty = bestiary.receiveEvent();

      expect(bestiary.scope.monsterHealth).toEqual(18);
   });
});
