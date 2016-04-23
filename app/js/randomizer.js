var Randomizer = function() {
  this.randomize = function(maxValue) {
    return Math.floor(Math.random() * maxValue);
  }
}
