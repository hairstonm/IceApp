describe("researchFacility", function(){
  var researchFacility;
  var scientists;
  var accumulator;
  var mediator;
  beforeEach(function(){
      mediator = td.object("Mediator");
      accumulator = td.object("Accumulator");
      researchFacility = new ResearchFacility(accumulator,scientists);
      researchFacility.mediator = mediator;
    });

  it("researching armor increases armor by 1", function(){
      researchFacility.activate("armor");

      expect(researchFacility.armor).toEqual(1);
  });

  it("sends armor modifier message to modifer", function(){
      var captor = td.matchers.captor();

      researchFacility.activate("armor");

      td.verify(mediator.sendEvent("modifier",captor.capture()));
  		expect(captor.value.researchType).toEqual("armor");
  });

  it("uses scientists to accumulate science", function(){
      researchFacility.generateScience();

      td.verify(accumulator.generateScience(scientists));
  });
});
