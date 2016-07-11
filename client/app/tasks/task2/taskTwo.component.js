(function () {
  'use strict';


  class TaskTwoController {
    // constructor() {
    //   this.title = '';
    //   this.tasks = [];
    //   console.log('constructor');
    // }

    $onInit() {
      var vm = this;
      vm.items = ['a', 'b', 'c'];
    }
  }
  angular.module('appApp')
    .component('taskTwo', {
      templateUrl: 'app/tasks/task2/taskTwo.html',
      controller: TaskTwoController,
      controllerAs: 'vm'
    });

})();
