angular.module("practiceAPP").controller("homeCtrl", function($scope, mainService){


$scope.movies = mainService.fakeData();

console.log($scope.movies)



// end of controller.
})
