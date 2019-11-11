appLoader.controller("all", ["$scope", "$http", function($scope, $http){
    floatNotificationError("Cargando...");

    $scope.len =  0;
    setTimeout(()=>{

        $scope.paises = [];

        // request
        $http({

            method: "GET",
            url: "php/controller/controller-countries.php"

        }).then((res)=>{

            $scope.paises = res.data.clients;
            $scope.len = res.data.clients.length;
        });

    }, 2000);
}]);