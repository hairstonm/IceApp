describe("arena", function(){
	var arena;
	var redshirt;
	var defender;
	var openArena;

	beforeEach(function(){
		openArena = {};
		arena = new Arena(openArena);
		redshirt = {
			attack : function(){}
		};

		spyOn(redshirt, 'attack');
	});

	it("evaluates combat where Redshirts attack!!!", function(){
		arena.evaluateCombat(redshirt,defender);
		expect(redshirt.attack).toHaveBeenCalled();
	});

	it("activates an open arena", function(){
		arena.activate();
		arena.evaluateCombat(redshirt,defender);

		expect(openArena.evaluateCombat).toHaveBeenCalled();
	});


});