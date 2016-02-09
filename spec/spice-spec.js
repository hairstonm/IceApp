describe("spiceApp", function(){
	var game;
	var arena;
	var redshirt;

	beforeEach(function(){
		arena = {
		evaluateCombat : function(){} 
		};

		spyOn(arena, 'evaluateCombat');
		
		game = new Game(arena);
	});

	describe("arena calls evaluateCombat", function(){
		When(function(){ game.increment(); });
		Then(function(){ expect(arena.evaluateCombat).toHaveBeenCalled();});
	});
});