describe("accumulator", function(){

    var resources = td.object("Resources");
    var accumulator;

    it('generates one science with one science officer', function(){
       accumulator = new Accumulator();

      accumulator.generateResources();

      td.verify(resources.addScience(1));
    });
});
