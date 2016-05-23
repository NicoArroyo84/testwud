(function() {
  'use strict';
  //var $ = require("jquery");

  angular
    .module('wud.techtest')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController($uibModal,UserService) {
    var vm = this;

    vm.errorGetUsers = false;
    vm.Open = Open;

    UserService.getUsers().then(function(users){
      vm.errorGetUsers = false;
      if(users && users.data){
        vm.usersList = users.data;
      }
    }, function(){
      vm.errorGetUsers = true;
    });

    //open modal to add new user and inject the list of users to update the list when the new user is created
    function Open() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/states/main/users/modal.html',
        controller : 'ModalInstanceController',
        controllerAs: 'users',
        resolve: {
          usersList : function(){
            return vm.usersList;
          }
        }
      });

    }
  }

})();
