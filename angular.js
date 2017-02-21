/**
 * Created by Alex.W on 2017/2/21.
 */
angular.module('myApp',[])
.controller('myCtrl',function($scope) {
    var emailMap = [];
    $scope.addEmail = function() {
        emailMap.push($scope.emails);
        console.log(emailMap)
    }
});