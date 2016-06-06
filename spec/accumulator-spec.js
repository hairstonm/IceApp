describe("accumulator", function(){

    var resources = td.object("Resources");
    var accumulator;
    var scientists = 1;
    it('generates one science with one science officer', function(){
       accumulator = new Accumulator(resources);

      accumulator.generateScience(scientists);

      td.verify(resources.addResource("science", 1));
    });
});
