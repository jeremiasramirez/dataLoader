appLoader.config(["$routeProvider", function($routeProvider){

    $routeProvider
        .when("/",{
            templateUrl: "public/js/view/view-clientes.html",
            controller: "clientes.controller"
        })
        .when("/all", {
            templateUrl: "public/js/view/view-all.html",
            controller: "all"
        })
        .otherwise({
            redirectTo : "/"
        })



}]);