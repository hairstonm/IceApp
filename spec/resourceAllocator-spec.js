describe("resourceAllocator", function() {
    var deathMessage = td.object('DeathMessage');
    var resources = td.object('Resources');
    var resourceContainer = ["fakenium","some","other", "stuff"];
    var count = 1;
    var multiplier = 1;
    var randomizer = td.object('Randomizer');

    it("adds resource to total resources", function () {
        var resourceAllocator = new ResourceAllocator(resources, resourceContainer, randomizer, multiplier);

        resourceAllocator.receiveEvent(deathMessage);

        td.verify(resources.addResource("fakenium", count));
    })
})