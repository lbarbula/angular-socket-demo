angular
  .module('chatApp')
  .controller('chatController', ['$rootScope','$scope', function($rootScope, $scope){
    $scope.message = undefined
    var socket = window.io()
    $scope.messages = []
    socket.on('recieve-message', function(data){
      $scope.$apply(function(){
        $scope.messages.push(data)
      })
    })
    //refactor root scope into service
    $rootScope.$on('new-user', function(event, username){
      console.log('this is working', 'testing please work')
      $scope.username= username
    })

    $scope.$watch(function() {
      return $scope.message
    })
    $scope.submitMessage = function (message){
      var newMessage = {
        username: $scope.username,
        message: $scope.message
      }
      socket.emit("new-message", newMessage)
      $scope.message = undefined
    }
  }])
