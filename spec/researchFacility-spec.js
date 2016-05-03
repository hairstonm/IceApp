describe("researchFacility", function(){
  var researchFacility;
  var mediator;

  beforeEach(function(){
      mediator = td.object("Mediator");
      researchFacility = new ResearchFacility(mediator);
    });
  it("researching armor increases armor by 1", function(){
      researchFacility.activate("armor");

      expect(researchFacility.armor).toEqual(1);
  })

  it("sends armor modifier message to modifer", function(){
      var captor = td.matchers.captor();

      researchFacility.activate("armor");

      td.verify(mediator.sendEvent("modifier",captor.capture()));
  		expect(captor.value.researchType).toEqual("armor");
  });
});
