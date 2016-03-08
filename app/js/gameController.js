var myApp = angular.module('app', []);

myApp.directive('mission', function(game){
	function missionCtrl(game) {
		this.startMission = function(){
			game.startMission();
		}
	};
	
	return {
		restrict: 'E',
		replace: true,
		template: ['<div>',
		 '<form>',
		 	'<button ng-click="mission.startMission()">this is a button</button>',
		 '</form>',
		 '<div class="mission-log"></div                                             k>',
		 '</div>'
		 ].join(''),
		 // scope: {},
		 controller: missionCtrl,
		 controllerAs: 'mission',
		 bindToController:true
	};
});
