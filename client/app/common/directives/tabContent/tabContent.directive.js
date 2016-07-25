(function () {
	'use strict';

	angular
		.module('appApp')
		.directive('tabContent', tabContent);

	tabContent.$inject = [];
	function tabContent() {
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
			
			tabsCtrl.getData().then(function(res){
				console.log(scope, attrs, ctrls);
				tabContentCtrl.dynamicContent = res.text;	
			});
		}
	}
	/* @ngInject */
	function TabContentController() {
	}
})();