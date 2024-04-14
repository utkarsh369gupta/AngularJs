// form Classes:

// ng-pristine - when Form/input not used yet        $pristine
// ng-dirty - when form/input has been used          $dirty

// ng-untouched - when input has not been touched    $touched
// ng-touched - when input has been touched

// ng-valid - when a form field is valid             $valid
// ng-invalid - when a form field is not valid       $invalid


var MyApp = angular.module('myapp', ['ngRoute']);

MyApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/formValidation', {
            templateUrl: 'views/contact.html'
        })
        .otherwise({
            redirectTo: '/formValidation'
        })

}])

MyApp.controller('FormController',['$scope', function(){
    var nameregx = /^[a-zA-Z]$/;
    
    $scope.contact.name
}])