angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope, $timeout, $ionicActionSheet, $ionicModal, $ionicPopup) {

  $scope.items = ['Item 1', 'Item 2'];

  $scope.showActionsheet = function() {

    $ionicActionSheet.show({
      titleText: 'Ejemplo de Action Sheet',
      buttons: [{
        text: 'Compartir'
      }, {
        text: 'Mover'
      }, ],
      destructiveText: 'Eliminar',
      cancelText: 'Cancelar',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    });
  };

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.doRefresh = function() {

    $timeout(function() {
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);

  };

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Realizar acción',
      template: 'Está seguro que desea realizar esta acción?',
      cancelText: 'Cancelar'
    });
    confirmPopup.then(function(res) {
      if (res) {
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };

});
