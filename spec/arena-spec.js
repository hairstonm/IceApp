describe("arena", function(){
	var arena;
	var attacker;
	var defender;
	var openArena;

	beforeEach(function(){
		openArena = {
			evaluateCombat : function(){}
		};
		arena = new Arena(openArena, attacker, defender);
		attacker = {
			attack : function(){}
		};
		spyOn(openArena, 'evaluateCombat');
		spyOn(attacker, 'attack');
	});

	it("activates an open arena", function(){
		arena.activate();
		arena.evaluateCombat(attacker, defender);

		expect(openArena.evaluateCombat).toHaveBeenCalled();
	});
});
