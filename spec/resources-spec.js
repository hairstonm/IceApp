describe("resources", function(){
var randomizer = new Randomizer();
var resources;
var newScience = randomizer.randomize(151);
var copperAmount = randomizer.randomize(10);
var ironAmount = randomizer.randomize(10);
var steelAmount = randomizer.randomize(10);
var titaniteAmount = randomizer.randomize(10);

  it("adds science to total science", function(){
    resources = new Resources();
    resources.science = 10;
    resources.addScience(newScience);

    expect(resources.science).toEqual(10 + newScience);
  });
  
  it("adds copper resources to copper total", function(){
    resources = new Resources();
    resources.copper = 10;

    resources.addCopper(copperAmount);

    expect(resources.copper).toEqual(10 + copperAmount);
  });

  it("adds iron resources to iron total", function(){
    resources = new Resources();
    resources.iron = 10;

    resources.addIron(ironAmount);

    expect(resources.iron).toEqual(10 + ironAmount);
  })

  it("adds steel resources to iron total", function(){
    resources = new Resources();
    resources.steel = 10;

    resources.addSteel(steelAmount);

    expect(resources.steel).toEqual(10 + steelAmount);
  })

  it("adds titanite resources to iron total", function(){
    resources = new Resources();
    resources.titanite = 10;

    resources.addTitanite(titaniteAmount);

    expect(resources.titanite).toEqual(10 + titaniteAmount);
  })
  
})
