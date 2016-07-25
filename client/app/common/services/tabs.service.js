(function () {
	'use strict';

	angular
		.module('appApp')
		.service('tabsService', tabsService);

	tabsService.$inject = ['$q'];
	function tabsService($q) {
		var contents = [{
			text: 'Content 1'			
		}, {
			text: 'Content 2'
		}, {
			text: 'Content 3'
		}];
		var service = {
			getData: getData
		};
		return service;
		////////////////
		function getData(id){
			var defer = $q.defer();
			setTimeout(function(){
				defer.resolve(contents[id]);
			}, 2000);
			return defer.promise;
		}

		
	}
})();