angular.module("app").factory('game', function() {
	var openArena = new OpenArena();
	var	mediator = new Mediator();
	var	arena = new Arena(openArena, new Combatant(mediator), new Combatant(mediator));
	mediator.registerListener("attack", new AttackListener());
	mediator.registerListener("defend", new DefenderListener());
	return new Game(mediator, arena);
});
