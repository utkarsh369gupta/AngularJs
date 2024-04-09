

var MyApp = angular.module("myapp", [])
// .filter('sortINt', function (a,b) { return a-b })

MyApp.controller('NinjaController', ['$scope', '$http', function ($scope, $http) {

    $scope.message = 'hello my name utkarsh gupta';
    $http.get('ninjas.json')
        .then(function (response) {
            $scope.ninjas = response.data;
        })
        .catch(function (error) {
            $scope.ninjas = null;
        });
    $scope.type = 'typeof(ninjas.name)';


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