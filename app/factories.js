angular
  .module('chatApp')
  .factory('userFactory', function() {
    return {
      createUser: (username) = {
        $broadcast('new-user'), username)
      }
    }
  })
