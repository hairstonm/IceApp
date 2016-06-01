var Resources = function(){
this.science = 0
this.copper = 0

  this.addScience = function(incomingScience){
      this.science += incomingScience;
  }

    this.addCopper = function(copperAmount){
        this.copper += copperAmount;
    }
}
