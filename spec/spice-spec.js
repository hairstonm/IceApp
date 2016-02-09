describe("spiceApp", function(){
	var game;
	var arena;

	beforeEach(function(){
		arena = {
		evaluateCombat : function(){} 
		};
		spyOn(arena, 'evaluateCombat');
	});

	describe("arena calls evaluateCombat", function(){
		Given(function(){ game = new Game(arena); });
		When(function(){ game.increment(); });
		Then(function(){ expect(arena.evaluateCombat).toHaveBeenCalled();});
	});

	describe("Redshirt attacks!!!", function(){
		

	});
});