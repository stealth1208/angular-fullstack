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
			controller: ['tabsService', TabContentController],
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
				
			
		}
	}
	/* @ngInject */
	function TabContentController(tabsService) {
		var vm = this;
		vm.data = tabsService.getContent()		
		vm.pens = tabsService.getPens();
		
	}
})();