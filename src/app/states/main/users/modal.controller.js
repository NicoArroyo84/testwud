(function() {
  'use strict';

  angular
    .module('wud.techtest')
    .controller('ModalInstanceController', ModalInstanceController);

 function ModalInstanceController ($scope, $uibModalInstance,UserService,usersList) {
    var vm = this;
    vm.firstname = "";
    vm.lastname = "";
    vm.email = "";
    vm.formHasError = false;

    vm.AddUser = AddUser;
    vm.Cancel = Cancel;

    function AddUser(e) {
      vm.formHasError = false;
      e.preventDefault();
      if(vm.firstname && vm.lastname){
        UserService.setUser(vm.firstname , vm.lastname , vm.email).then(function(res){
          vm.firstname = "";
          vm.lastname = "";
          vm.email = "";
          usersList.push(res.config.data);
          $uibModalInstance.close();
        }, function(){
          vm.formHasError = true;
        });
      }
    }

   function Cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }


})();
