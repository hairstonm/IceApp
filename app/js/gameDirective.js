var myApp = angular.module('app', []);

myApp.directive('mission', function(game){
	function link(scope) {
		scope.$on('toggleMissionStatus', function(){
			debugger;
			if (scope.missionInProgress){
				game.stopMission();
				scope.missionButtonText = "Start Mission";
			} else {
				game.startMission();
				scope.missionButtonText = "Stop Mission";
			}
			scope.missionInProgress = !scope.missionInProgress
		});
	};

	return {
		restrict: 'E',
		replace: true,
		 link : link
	};
});

