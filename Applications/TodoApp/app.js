var myapp = angular.module("myapp", [])

myapp.controller('TodoController', ['$scope', function ($scope) {
    $scope.todos = [
        { title: 'learn angular', desc: "Complete angular all assignments", done: false },
        { title: 'build an app', desc: "Create a Todo application using AngularJs", done: false }
    ]

    $scope.addTodo = function () {
        $scope.todos.push({
            title: $scope.title,
            desc: $scope.desc,
            done: false
        })
        $scope.title = "";
        $scope.desc = "";
    }

    $scope.done = function(x){
        var i = $scope.todos.indexOf(x);
        $scope.todos.splice(i, 1);
    }

}])



