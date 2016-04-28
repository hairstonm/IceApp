describe("researchFacility", function(){
  var researchFacility;

  it("researching armor increases armor by 1", function(){
      researchFacility = new ResearchFacility();

      researchFacility.activate("armor");

      expect(researchFacility.armor).toEqual(1);
  })
});
