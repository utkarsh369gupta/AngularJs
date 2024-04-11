

var MyApp = angular.module("myapp", ['ngRoute']);
// .filter('sortINt', function (a,b) { return a-b })


MyApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'views/homepage.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        }).otherwise({
            redirectTo: '/home'
        });
}])


MyApp.controller('NinjaController', ['$scope', '$http', function ($scope, $http) {


    $scope.message = 'hello my name utkarsh gupta';

    $http.get('ninjas.json')
        .then(function (response) {
            $scope.ninjas = response.data;
            console.log(angular.toJson($scope.ninjas));
        })
        .catch(function (error) {
            $scope.ninjas = null;
        });

    $scope.removeNinja = function (ninja) {
        var removeNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removeNinja, 1);
    }

    $scope.addNinja = function () {
        $scope.ninjas.push({
            name: $scope.newNinja.name,
            rate: $scope.newNinja.rate,
            belt: $scope.newNinja.belt,
            available: true,
            src: ""
        })

        $scope.newNinja.name = ""
        $scope.newNinja.rate = ""
        $scope.newNinja.belt = ""
    }


}]);





/**
 * Configures the Angular module "myapp" before the page is loaded.
 */
// MyApp.config(
// Logic to be executed before the Angular module has been loaded
//)

/**
 * Runs after the Angular module "myapp" has been loaded and initialized.
 */
// MyApp.run(
// Logic to be executed after the Angular module has been loaded
//)