appLoader.controller("clientes.controller", ["$scope", "$http", function($scope, $http){
    $scope.paises = [];
    $http({
        method: "GET",
        url: "php/controller/controller-countries.php"
    }).then((res)=>{
        $scope.paises = res.data.clients;

    })

}]);