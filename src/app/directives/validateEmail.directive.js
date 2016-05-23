(function() {
  'use strict';

  angular
    .module('wud.techtest')
    .directive('validateEmail', validateEmail);

  /** @ngInject */
  function validateEmail() {
    var EMAIL_EXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    return {
      require: 'ngModel',
      restrict: '',
      link: function(scope, elm, attrs, ctrl) {
        // apply when ngModel is present and the default one is in place
        if (ctrl && ctrl.$validators.email) {

          //overwrite the default Angular email validator
          ctrl.$validators.email = function(modelValue) {
            return ctrl.$isEmpty(modelValue) || EMAIL_EXP.test(modelValue);
          };
        }
      }
    };
  }
})();
