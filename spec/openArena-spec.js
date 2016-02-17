describe('OpenArena', function(){
	var arena;
	var redshirt;
	var defender;

	beforeEach(function(){
		arena = new OpenArena();
		redshirt = {
			attack : function(){}
		};
		spyOn(redshirt, 'attack');
	});

	it("evaluates combat where Redshirts attack!!!", function(){
		arena.evaluateCombat(redshirt,defender);
		expect(redshirt.attack).toHaveBeenCalled();
	});
});