var Accumulator = function(resources){
this.resources = resources;

  this.generateScience = function(scientists){
      resources.addResource("science", scientists);
  };
}
