app.controller("registerctrl",["$scope","$http", "$window", "$location", function($scope, $http, $window,$location){
    $scope.sign =function(){
        event.preventDefault();
        var uname = $scope.uname;
        var email = $scope.email;
        var pass = $scope.upass;
        var location = $scope.location;


        $http({
            method:'POST',
            url:'http://localhost:3000/userdata',
            headers:{
                'content-type':'application/json'
            },
            data:{uname: uname, email:email, pass:pass, location:location}
        }).then(function successCallback(response){
            alert("Registartion Successful");
            location.href = "#!signin";
            $location.path('/signin');
        
        },function errorCallback(response){
            throw new Error("Registration failed");
        });
    };
}]);
