app.service("userservice",["$http",function($http){
    this.getUser = function() {
        return localStorage.getItem("username");
      };
    
      this.displayUser = function() {
        var name = this.getUser();
        document.getElementById("name").innerText = name;
      };
    
      this.logout = function() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      };
    
      this.login = function(username, password) {
        return $http.get("http://localhost:3000/userdata")
          .then(function(response) {
            var userdata = response.data;
            var validate = false;
            for (const i of userdata) {
              if (i.uname === username && i.pass === password) {
                validate = true;
                break;
              }
            }
            return validate;
          })
          .catch(function(error) {
            console.log(error);
            return false;
          });
      };
      var trendingPlaylistsApiUrl = 'https://discoveryprovider.audius.co/v1/tracks/trending?app_name=EXAMPLEAPP';
    
      this.getAudiusData = function(cb) {
       
        console.log("Service");
        $http({
            method : 'GET',
            url:trendingPlaylistsApiUrl,
          
        })
            .then(function(response) {
              
                   cb(response.data.data)
            })
            .catch(function(error) {
                console.log(error);
            });
    };

}])