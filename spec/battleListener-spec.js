describe('battleListener', function(){
  var deathMessage = new DeathMessage("dead");
  var defender = td.object("CombatParty");
  var battle = td.object("Battle");


  beforeEach(inject(function ($rootScope) {
    $scope = $rootScope.$new();
    $scope.missionLog = [];
  }));
    it('tells the battle to load up a new defender', function(){
    var battleListener = new BattleListener();

    battleListener.receiveEvent(deathMessage);

    td.verify(battle.loadNewDefender(defender));
  })
})
