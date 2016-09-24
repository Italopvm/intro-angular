angular.module('Zordon', []);

angular.module('Zordon')
	.controller('alpha',['$scope',alphaCtrl]);

	function alphaCtrl($scope){
		console.log('controller is working yes');

		$scope.greeting = 'Welcome to the command Center';
		$scope.subgreeting = 'Power Rangers ONLY';

		$scope.fightPutty = function(){
			$scope.subGretting = 'Punch noises! The putty disappeared';
		}
	}