describe("resources", function(){
var randomizer = new Randomizer()
var resources;
var newScience = 1
var copperAmount = randomizer.randomize(10)

  it("adds science to total science", function(){
    resources = new Resources();

    resources.addScience(newScience);

    expect(resources.science).toEqual(1);
  });
  
  it("copper resource gets added to copper total", function(){
    resources = new Resources();
    resources.copper = 10;

    resources.addCopper(copperAmount);

    expect(resources.copper).toEqual(10 + copperAmount);
  });
})
