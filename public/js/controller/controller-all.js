appLoader.controller("all", ["$scope", "$http", function($scope, $http){
    floatNotificationError("Cargando...");
    setTimeout(()=>{


        $scope.paises = [];

        // request
        $http({

            method: "GET",
            url: "php/controller/controller-countries.php"

        }).then((res)=>{

            $scope.paises = res.data.clients;

        });

    }, 2000);
}]);