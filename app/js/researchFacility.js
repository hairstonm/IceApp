var ResearchFacility = function(){
  this.armor = 0;

   this.activate = function(researchType){
     eval("this." +researchType+ " += 1");
     Mediator.getInstance().sendEvent("modifer", "ModifierMessage");
   };
};
