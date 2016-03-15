var myApp = angular.module('app', []);

myApp.directive('mission', function(game){
	function link(scope) {
		scope.$on('toggleMissionStatus', function(){
			if (scope.missionInProgress){
				game.stopMission();
			} else {
				game.startMission();
			}
			scope.missionInProgress = !scope.missionInProgress
		});
	};

	return {
		restrict: 'E',
		replace: true,
		template: ['<div>',
		 '<form>',
		 	'<button ng-click="toggleMissionStatus()">Start Mission</button>',
		 '</form>'
		 ].join(''),
		 link : link
	};
});
