describe("attacker", function(){
	var attacker;
	var defender;

	beforeEach(function(){
		attacker = new Attacker();
		defender = {
			receiveAttack : function(){}
		};

		spyOn(defender, 'receiveAttack');
	});

	describe("Defender is attacked!!!", function(){
		When(function(){ attacker.attack(defender)});
		Then(function(){ expect(defender.receiveAttack).toHaveBeenCalled();
		});
	});
});

