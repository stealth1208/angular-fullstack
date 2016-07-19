(function () {
  'use strict';

  class TaskOneController {
    constructor($interval) {
      var vm = this;
      this.$interval = $interval;
      // vm.count1 = 0;
      // vm.count2 = 5;
      // vm.count3 = 0;
      console.log('constructor');
    }

    $onInit() {
      var vm = this;
      vm.items = ['1', '2', '3'];
    }

    increase(params) {
      if (params.type === 1) {
        this.count1++;
      }
      if (params.type === 2) {
        this.count2++;
      }
    }

    decrease(params) {
      if (params.type === 1) {
        this.count1--;
      }
      if (params.type === 2) {
        this.count2--;
      }
    }

    autoIncrease(params) {
      var vm = this;
      var interval = vm.$interval(function () {
        vm.count3++;
      }, 300, params.target).then(function (res) {
        vm.$interval.cancel(interval);
        vm.sayYeah();
      });
    }

    autoDecrease(params) {
      var vm = this;
      var interval = vm.$interval(function () {
        vm.count3--;
      }, 300, params.target).then(function (res) {
        vm.$interval.cancel(interval);
        vm.sayYeah();
      });
    }

    hideMe(count, target) {
      return count == target;
    }
    sayYeah() {
      console.log(this);
      alert('oh yeahhh....');
    }   
}

  // function sayYeah() {
  //   console.log(this);
  //   alert('oh yeahhh....');
  // }

  angular.module('appApp')
  .component('taskOne', {
    templateUrl: 'app/tasks/task1/taskOne.html',
    controller: TaskOneController,
    controllerAs: 'vm',
    bindings: {
      count1: '=1',
      count2: '=',
      count3: '=',
    }
  });

})();
