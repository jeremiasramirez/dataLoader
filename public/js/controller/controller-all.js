appLoader.controller("all", ["$scope", "$http", function($scope, $http){

    $scope.msjStatus = 0;

    // request
    $http({

        method: "GET",
        url: "php/controller/controller-countries.php"

    }).then((res)=>{

        console.log(res);

    });


}]);