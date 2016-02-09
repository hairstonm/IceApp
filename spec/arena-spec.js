describe("arena", function(){
	var arena;
	var redshirt;
	var defender;

	beforeEach(function(){
		arena = new Arena();
		redshirt = {
			attack : function(){}
		};

		spyOn(redshirt, 'attack');
	});

	describe("Redshirt attacks!!!", function(){
		When(function(){ arena.evaluateCombat(redshirt,defender)});
		Then(function(){ expect(redshirt.attack).toHaveBeenCalled();});
	});


});