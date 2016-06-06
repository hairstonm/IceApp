var Resources = function(){
this.science = 0;
this.copper = 0;
this.titanite = 0;
this.iron = 0;
this.steel = 0;

  this.addResource = function(resource, amount){
      eval("this." + resource + " += " + amount);
  }
}
