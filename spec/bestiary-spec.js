describe("Bestiary", function() {
  var bestiary;
  var mediator;
  var $rootScope;

  beforeEach(inject(function($rootScope) {
    randomizer = {randomize: function(){return 3}}
    bestiary = new Bestiary(randomizer);
    bestiary.scope = $rootScope.$new();
    var mediator = td.object("Mediator");
    bestiary.scope.mediator = mediator;
  }));

  it("creates a new Combat Party when newCombatParty is called", function() {
    var combatParty = bestiary.newCombatParty();

    expect(combatParty instanceof CombatParty).toBe(true);
  });

  it("creates Combat Party utilizing existing mediator", function() {
    var newCombatParty = bestiary.newCombatParty();

  	expect(newCombatParty.mediator === mediator).toBe(true);
  });
});
