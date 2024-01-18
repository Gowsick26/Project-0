app.controller('myCtrl', ["$scope","$window","$location","userservice",function ($scope,$window,$location,userservice) {
  $scope.name = localStorage.getItem("username");

  $scope.dis = function () {
    document.getElementById("name").innerText = $scope.name;
  };

  $scope.logout = function () {
    console.log('hi');
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    location.href='#!/sigin';
  };

  userservice.getAudiusData(function(data){
    console.log("Cont");
    $scope.songs = data;
    console.log($scope.songs);

    // for(let i=0;i<data.length;i++){
    //   console.log(data[i].mood);
    // }
   
  })
  
  $scope.sort = function(){
        $scope.asc = "title";
        console.log($scope.asc);
  }
  }]);