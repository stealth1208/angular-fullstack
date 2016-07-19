(function () {
  'use strict';

  angular
    .module('appApp')
    .directive('information', information);

  information.$inject = [];
  function information() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      link: link,
      restrict: 'EA',
      scope: {
        testScope: '=?'
      },
      templateUrl: 'app/common/directives/information/information.html'
    };
    return directive;

    function link(scope, element, attrs) {
      console.log(scope);
      // scope.testScope = scope.$parent.testScope;
      scope.plusTestScope = function(){
        scope.testScope++;
      }
      
      
    }
  }

})();