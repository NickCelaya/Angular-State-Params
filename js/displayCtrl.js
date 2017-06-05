angular.module("practiceAPP").controller("displayCtrl", function($scope, mainService, $stateParams){



var movies = mainService.fakeData();

for (var i = 0; i < movies.length; i++) {
  if(movies[i].id === parseInt($stateParams.id)){
    $scope.singleMovie = movies[i];
  }
}



//end of controller
});
