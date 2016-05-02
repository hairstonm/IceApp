describe("researchFacility", function(){
  var researchFacility;
  var mediator;
  var modiferMessage;

  beforeEach(function(){
      mediator = td.object("Mediator");
      modiferMessage = td.object("ModifierMessage");
      td.when(Mediator.getInstance()).thenReturn(mediator);
  });

  it("researching armor increases armor by 1", function(){
      researchFacility = new ResearchFacility();

      researchFacility.activate("armor");

      expect(researchFacility.armor).toEqual(1);
  })

  it("sends armor modifier message to modifer", function(){
      researchFacility = new ResearchFacility();

      researchFacility.activate("armor");

      td.verify(mediator.sendEvent("modifier",modiferMessage));
  });
});
