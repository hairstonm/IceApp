describe("resources", function(){
var resources;
var newScience = 1
  it("adds science to total science", function(){
    resources = new Resources();

    resources.addScience(newScience);

    expect(resources.science).toEqual(1);
  })


})
