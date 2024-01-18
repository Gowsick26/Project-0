app.controller("signinctrl",["$scope","$http","$window",function($scope, $http, $window,userservice){
    $scope.login = function(event){
        if(event){
            event.preventDefault();
        }
        
        var uname = $scope.username;
        var pass = $scope.password;
        localStorage.setItem("username", uname);
        localStorage.setItem("password", pass);
        console.log(uname, pass);
        var validate = false;

        $http({
            method:'GET',
            url:'http://localhost:3000/userdata',
         
        })
        .then(function(response){
            $scope.userdata = response.data;
            console.log($scope.userdata);
            for(var i of $scope.userdata){
                if(i.uname === uname && i.pass === pass){
                    console.log("Success");
                    alert("Login successful");
                    validate = true;
                    location.href = "#!Dashboard";

                }
            }
            if(!validate){
                alert("Invalid credentials");
                $window.location.reload();
            }
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        });
    };
}]);