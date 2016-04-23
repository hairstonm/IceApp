describe("CombatPartyFactory", function() {
  var combatPartyFactory;
  var mediator;
  var $rootScope;

  beforeEach(inject(function($rootScope) {
    combatPartyFactory = new CombatPartyFactory();
    combatPartyFactory.scope = $rootScope.$new();
    var mediator = td.object("Mediator");
    combatPartyFactory.scope.mediator = mediator;
  }));

  it("creates a new Combat Party when newCombatParty is called", function() {
    var combatParty = combatPartyFactory.newCombatParty();

    expect(combatParty instanceof CombatParty).toBe(true);
  });

  it("creates Combat Party utilizing existing mediator", function() {
    var newCombatParty = combatPartyFactory.newCombatParty();

  	expect(newCombatParty.mediator === mediator).toBe(true);
  });
});
