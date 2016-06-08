describe("resources", function () {
   var randomizer = new Randomizer();
   var resources;
   var newScience = randomizer.randomize(151);
   var copperAmount = randomizer.randomize(10);
   var ironAmount = randomizer.randomize(10);
   var steelAmount = randomizer.randomize(10);
   var titaniteAmount = randomizer.randomize(10);

   beforeEach(function(){
      resources = new Resources();
   });

   it("adds science to total science", function () {
      resources.resources.science = 10;
      resources.addResource("science", newScience);

      expect(resources.resources.science).toEqual(10 + newScience);
   });

   it("adds copper resources to copper total", function () {
      resources.resources.copper = 10;

      resources.addResource("copper", copperAmount);

      expect(resources.resources.copper).toEqual(10 + copperAmount);
   });

   it("adds iron resources to iron total", function () {
      resources.resources.iron = 10;

      resources.addResource("iron", ironAmount);

      expect(resources.resources.iron).toEqual(10 + ironAmount);
   });

   it("adds steel resources to steel total", function () {
      resources.resources.steel = 10;

      resources.addResource("steel", steelAmount);

      expect(resources.resources.steel).toEqual(10 + steelAmount);
   });

   it("adds titanite resources to titanite total", function () {
      resources.resources.titanite = 10;

      resources.addResource("titanite", titaniteAmount);

      expect(resources.resources.titanite).toEqual(10 + titaniteAmount);
   });
});
