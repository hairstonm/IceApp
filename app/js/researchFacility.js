var ResearchFacility = function(mediator){
  this.armor = 0;

   this.activate = function(researchType){
     eval("this." +researchType+ " += 1");
     mediator.sendEvent("modifier", new ModifierMessage(researchType));
   };
};
