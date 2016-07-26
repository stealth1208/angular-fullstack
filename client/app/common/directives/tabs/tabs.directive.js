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
			controller: ['$scope', 'tabsService', '$q', TabsController],
			controllerAs: 'tabCtrl',
			link: link,
			restrict: 'EA',
			scope: {				
			},
			templateUrl: 'app/common/directives/tabs/tabs.html'
		};
		return directive;

		function link(scope, element, attrs, ctrl) {			
		}
	}
	/* @ngInject */
	function TabsController($scope, tabsService, $q){
		var vm = this;
		vm.tabs = [{			
			name: 'New'
		}, {			
			name: 'In progress'
		}, {			
			name: 'Closed'
		}];		

		vm.selected = 0;
		vm.selectTab = selectTab;				

		///////////////////////////

		function selectTab(tab){			
			vm.selected = vm.tabs.indexOf(tab);
			tabsService.setId(vm.selected)
			return vm.selected;
		}
	}
})();