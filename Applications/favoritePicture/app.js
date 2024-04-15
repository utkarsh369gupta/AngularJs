
var myapp = angular.module('myapp', [])

myapp.controller('PicsController', ['$scope', function ($scope) {
    $scope.imageList = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
    $scope.favList = [];

    $scope.addfavourite = function (x) {
        var i = $scope.imageList.indexOf(x)
        $scope.imageList.splice(i,1);
        $scope.favList.push(x);
        $scope.added = "Moved [image] to favorites"
    }
}])


