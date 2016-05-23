(function() {
  'use strict';

  angular
    .module('wud.techtest')
    .directive('wudNavbar', wudNavbar);

  /** @ngInject */
  function wudNavbar() {
    return {
      restrict: 'E',
      controller: function($scope,$state){
        var vm = this;

        vm.states = $state.get();

        vm.isUndefined = function(item) {
          return angular.isDefined(item.label);
        }
      },
      controllerAs : "nav",
      templateUrl: 'app/components/navbar/navbar.html'
    };
  }
})();
