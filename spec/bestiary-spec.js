describe("Bestiary", function() {
  var bestiary;
  var mediator;
  var $rootScope;
  var battle;

  beforeEach(inject(function($rootScope) {
    randomizer = {randomize: function(){return 3}}
    battle = td.object("Battle");
    bestiary = new Bestiary(randomizer, battle);
  }));

  it("creates a new Combat Party when it receives an event", function() {
    var combatParty = bestiary.receiveEvent();

    td.verify(battle.loadNewDefender(td.matchers.anything()));
  });
});
