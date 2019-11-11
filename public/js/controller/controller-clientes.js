appLoader.controller("clientes.controller", ["$scope", "$http", function($scope, $http){


    // request
    $scope.paises = [];

    $scope.sizeDataPage = null;
    $scope.lenPage = 0;
    $http({
        method: "GET",
        url: "php/controller/controller-countries.php"
    }).then((res)=>{
        $scope.paises = res.data.clients;
        $scope.sizeDataPage = res.data.clients.length;
        $scope.lenPage = Math.ceil(res.data.clients.length / 6);
    });


    /*pagination page size*/
    $scope.positionPage = 6;

    /*visualization page*/
    $scope.positionPageView = 1;


    //page right click

    $scope.pageRight = function(){
        if($scope.sizeDataPage){
            $scope.positionPage += 6;
            $scope.positionPageView += 1;
        }
    }















}]);