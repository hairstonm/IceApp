var Resources = function(){
this.resources = new Object();
this.resources.science = 0;
this.resources.copper = 0;
this.resources.titanite = 0;
this.resources.iron = 0;
this.resources.steel = 0;

  this.addResource = function(resource, amount){
      this.resources[resource] += amount;
  }
}
