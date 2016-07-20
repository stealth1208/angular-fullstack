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
			controller: TabContentController,
			link: link,
			restrict: 'EA',
			scope: {
			}
		};
		return directive;

		function link(scope, element, attrs, ctrl) {
			console.log(ctrl);
		}
	}
	/* @ngInject */
	function TabContentController() {

	}
})();