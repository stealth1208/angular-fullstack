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
		vm.getData = getData;

		///////////////////////////

		function selectTab(tab, index){			
			vm.selected = vm.tabs.indexOf(tab);
			getData(vm.selected);
			return vm.selected;
		}

		function getData(id){
			var defer = $q.defer();		
			tabsService.getData(id || vm.selected).then(function(res){
				$scope.pa = res.text;
				vm.pa = res.text;			
				defer.resolve(res);
			});
			return defer.promise;
		}

		
	}
})();