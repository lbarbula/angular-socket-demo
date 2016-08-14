angular
  .module('chatApp')
  .controller('userCreation', ['$scope','$rootScope', function($rootScope, $scope){
    $scope.view = {}
    $scope.view.username = undefined
    $scope.createUser = (username) => {
      console.log($scope.view.username)
      console.log('hit', username)
      $rootScope.$emit('new-user', username)
    }
  }])
