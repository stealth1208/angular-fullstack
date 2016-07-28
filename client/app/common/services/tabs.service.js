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

		var contentId = '';
		var data = [];
		var penList = [];

		var service = {
			getContent: getContent,
			getData: getData,
			addPen: addPen,
			getPens: getPens	
		};
		return service;

		////////////////

		function getContent(id) {
			// if(contentId !== id || !data.length){
			// 	contentId = id;
			// 	getData().then(function(){
			// 		return data;
			// 	});
			// }else{
			// 	return data;
			// }
			data.push(contents[contentId ? contentId: 0]);
			contentId = id;
			return data;
		}

		// function setId(id) {
		// 	contentId = id;
		// }

		function getData(){
			// var defer = $q.defer();
			// setTimeout(function () {
			// 	defer.resolve(contents[contentId || 0]);
			// }, 2000);
			// return defer.promise;
				data.push(contents[contentId || 0]); 
		}

		function addPen(pen){
			penList.push(pen);
		}

		function getPens(){
			return penList;
		}


	}
})();