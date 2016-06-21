describe("cloningFacility", function () {

   var message = td.object("AttackMessage");
   var battle = td.object("Battle");
   var randomizer = td.object("Randomizer");
   var cloningFacility = new CloningFacility(battle);

   beforeEach(inject(function ($rootScope) {
      cloningFacility.scope = $rootScope.$new();
      cloningFacility.scope.heroName = "";
      cloningFacility.scope.heroHealth = "";
   }));

   it("adds hero name to UI", function () {
      td.when(randomizer.randomize(td.matchers.isA(Number))).thenReturn(65);
      cloningFacility.randomizer = randomizer;
      cloningFacility.receiveEvent(message);

      expect(cloningFacility.scope.heroName).toEqual("Redshirt65");
   });

   it("adds hero health to UI", function(){
      cloningFacility.receiveEvent(message);

      expect(cloningFacility.scope.heroHealth).toEqual(10);
   });

});

