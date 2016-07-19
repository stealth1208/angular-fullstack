(function () {
  'use strict';


  class TasksController {
    constructor($scope) {      
      $scope.testScope = 5;
      this.title = '';
      this.tasks = [];
      this.plusTestScope = function(){
        $scope.testScope++;
      }      
    }
    
    $onInit($scope) {
      var vm = this;
      vm.title = 'Tasks';
      vm.password = '123';
      vm.username = 'Chau';
    }
  }
  angular.module('appApp')
    .component('tasks', {
      templateUrl: 'app/tasks/tasks.html',
      controller: TasksController,
      controllerAs: 'vm'
    });

})();
