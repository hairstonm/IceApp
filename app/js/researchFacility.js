var ResearchFacility = function(accumulator,scientists){
  this.armor = 0;
  this.accumulator = accumulator;
  this.scientists = scientists;
  this.mediator = Mediator.getInstance();

   this.activate = function(researchType){
     eval("this." +researchType+ " += 1");
     mediator.sendEvent("modifier", new ModifierMessage(researchType));
   };

   this.generateScience = function(){
     accumulator.generateScience(scientists);
   };
};
