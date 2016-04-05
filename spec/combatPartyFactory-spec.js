describe("CombatPartyFactory", function() {
  var mediator;
  var combatPartyFactory;

  beforeEach(function() {
    var mediator = Mediator.getInstance();
    combatPartyFactory = new CombatPartyFactory(mediator);
  });
  it("creates a new Combat Party when newCombatParty is called", function() {
    var combatParty = combatPartyFactory.newCombatParty();

    expect(combatParty instanceof CombatParty).toBe(true);
  });

  it("creates Combat Party utilizing existing mediator", function() {
    // var combatParty = combatPartyFactory.mediator;
    var newCombatParty = combatPartyFactory.newCombatParty();

  	expect(newCombatParty.mediator === mediator).toBe(true);
  });
});
