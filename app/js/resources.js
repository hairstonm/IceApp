var Resources = function(){
this.science = 0;
this.copper = 0;
this.titanite = 0;
this.iron = 0;
this.steel = 0;

  this.addScience = function(incomingScience){
      this.science += incomingScience;
  }

    this.addCopper = function(copperAmount){
        this.copper += copperAmount;
    }
  this.addIron = function(ironAmount){
      this.iron += ironAmount;
  }
  this.addSteel = function(steelAmount){
      this.steel += steelAmount;
  }
  this.addTitanite = function(titaniteAmount){
      this.titanite += titaniteAmount;
  }
}
