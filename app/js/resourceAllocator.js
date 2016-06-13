var ResourceAllocator = function(resources, resourceContainer , randomizer, multiplier){
    this.resources = resources;
    this.resourceContainer = resourceContainer;
    this.randomizer = randomizer;
    this.multiplier = multiplier;

    this.receiveEvent = function(message){
        resources.addResource(this.resourceContainer[randomizer.randomize(this.resourceContainer.length-1)], 1 * multiplier);
    }
}
