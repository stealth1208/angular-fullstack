(function () {
	'use strict';

	angular
		.module('appApp')
		.directive('tabContent', tabContent);

	tabContent.$inject = ['tabsService'];
	function tabContent(tabsService) {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			require: ['^^tabs','tabContent'],
			controller: TabContentController,
			controllerAs: 'tcCtrl',
			link: link,
			restrict: 'EA',
			scope: {
				name: '@',
				content: '='	
			},
			templateUrl: 'app/common/directives/tabContent/tabContent.html'
		};
		return directive;

		function link(scope, element, attrs, ctrls) {
			var tabsCtrl = ctrls[0];
			var tabContentCtrl = ctrls[1];
			console.log(tabsService.data);
			scope.$watch('tabsService.data', function(newValue, oldValue){
				console.log(newValue);
			});
			
		}
	}
	/* @ngInject */
	function TabContentController() {
	}
})();