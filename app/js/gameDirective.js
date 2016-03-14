var myApp = angular.module('app', []);

myApp.directive('mission', function(game, scope.$on){
	function missionCtrl(game) {
		this.startMission = function(){
			if ($scope.missionInProgress){
				game.stopMission();
			} else {
				game.startMission();
			}
			$scope.missionInProgress = !$scope.missionInProgress;
		}
	};

	function link(scope) {
		var mission = scope.mission;
	};

	return {

		restrict: 'E',
		replace: true,
		template: ['<div>',
		 '<form>',
		 	'<button ng-click="mission.startMission($scope)">Start Mission</button>',
		 '</form>'
		 ].join(''),
		 controller: missionCtrl,
		 controllerAs: 'mission',
		 bindToController:true
	};
});
