

app.config(function($routeProvider) {
    $routeProvider
      
        .when('/', {
            templateUrl: '../Html/landing.html',
            // controller: '../controllers/dashboard.js'
        })
        .when('/Dashboard', {
            templateUrl: '../Html/Dashboard.html',
            controller: 'myCtrl'
        })
        .when('/signin', {
            templateUrl: '../Html/signin.html',
            controller: 'signinctrl'
        })
        .when('/registration', {
            templateUrl: '../Html/registration.html',
            controller: 'registerctrl'
        })
        .otherwise({ redirectTo: '/' }); 
});
