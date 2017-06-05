
angular.module("practiceAPP", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){

$stateProvider

.state("home",{
  url: "/",
  templateUrl: "views/home.html",
  controller: "homeCtrl"
})

.state("display",{
  url: "/display/:id",
  templateUrl: "./views/display.html",
  controller: "displayCtrl"

})




$urlRouterProvider
.otherwise("/")

})
