(function () {
	'use strict';

	angular
		.module('appApp')
		.directive('tabs', tabs);

	tabs.$inject = [];
	function tabs() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			transclude: true,
			controller: ['$scope' ,TabsController],
			controllerAs: 'vm',
			link: link,
			restrict: 'EA',
			scope: {
			},
			templateUrl: 'app/common/directives/tabs/tabs.html'
		};
		return directive;

		function link(scope, element, attrs) {
		}
	}
	/* @ngInject */
	function TabsController($scope){
		$scope.tabs = [{
			id: 0,
			name: 'New'
		}, {
			id: 1,
			name: 'In progress'
		}, {
			id: 2,
			name: 'Closed'
		}];
	}
})();