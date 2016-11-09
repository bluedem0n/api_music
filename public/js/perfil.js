// // (function() {
    
// //     function login(callback) {
// //         var CLIENT_ID = "a8556ddfad6a4136883d2c2dc6904f51";
// //         var REDIRECT_URI = "http://localhost:8085/search.html";
// //         function getLoginURL(scopes) {
// //             return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
// //               '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
// //               '&scope=' + encodeURIComponent(scopes.join(' ')) +
// //               '&response_type=token';
// //         }
        
// //         var url = getLoginURL([
// //             'user-read-email'
// //         ]);
        
// //         var width = 450,
// //             height = 730,
// //             left = (screen.width / 2) - (width / 2),
// //             top = (screen.height / 2) - (height / 2);
    
// //         window.addEventListener("message", function(event) {
// //             var hash = JSON.parse(event.data);
// //             if (hash.type == 'access_token') {
// //                 callback(hash.access_token);
// //             }
// //         }, false);
        
// //         var w = window.open(url,
// //                             'Spotify',
// //                             'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
// //                            );
        
// //     }

// //     function getUserData(accessToken) {
// //         return $.ajax({
// //             url: 'https://api.spotify.com/v1/me',
// //             headers: {
// //                'Authorization': 'Bearer ' + accessToken
// //             }
// //         });
// //     }

// //     var templateSource = document.getElementById('result-template').innerHTML,
// //         template = Handlebars.compile(templateSource),
// //         resultsPlaceholder = document.getElementById('result'),
// //         loginButton = document.getElementById('btn-login');
    
// //     // window.addEventListener('click', function() {
// //     //     login(function(accessToken) {
// //     //         getUserData(accessToken)
// //     //             .then(function(response) {
// //     //                 loginButton.style.display = 'none';
// //     //                 resultsPlaceholder.innerHTML = template(response);
// //     //             });
// //     //         });
// //     // });
// //     (function(){
// //       login(function(accessToken) {
// //           getUserData(accessToken)
// //               .then(function(response) {
// //                   // loginButton.style.display = 'none';
// //                   resultsPlaceholder.innerHTML = template(response);
// //               });
// //           });
// //     })();

// // })();

// // (function() {

// //   // var module = angular.module('PlayerApp');

// //   // module.factory('Auth', function() {

// //     var CLIENT_ID = "a8556ddfad6a4136883d2c2dc6904f51";
// //     var REDIRECT_URI = "http://localhost:8085/search.html";

// //     // if (location.host == 'localhost:8085') {
// //     //   CLIENT_ID = "a8556ddfad6a4136883d2c2dc6904f51";
// //     //   REDIRECT_URI = 'http://localhost:8085/search.html';
// //     // } else {
// //     //   CLIENT_ID = '9714921402b84783b2a207f1b6e82612';
// //     //   REDIRECT_URI = 'http://lab.possan.se/thirtify/callback.html';
// //     // }

// //     function getLoginURL(scopes) {
// //       return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID
// //         + '&redirect_uri=' + encodeURIComponent(REDIRECT_URI)
// //         + '&scope=' + encodeURIComponent(scopes.join(' '))
// //         + '&response_type=token';
// //     }

// //     return {
// //       openLogin: function() {
// //         var url = getLoginURL([
// //           'user-read-private',
// //           'playlist-read-private',
// //           'playlist-modify-public',
// //           'playlist-modify-private',
// //           'user-library-read',
// //           'user-library-modify',
// //           'user-follow-read',
// //           'user-follow-modify'
// //         ]);

// //         var width = 450,
// //             height = 730,
// //             left = (screen.width / 2) - (width / 2),
// //             top = (screen.height / 2) - (height / 2);

// //         var w = window.open(url,
// //             'Spotify',
// //             'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
// //         );
// //       },
// //       getAccessToken: function() {
// //         var expires = 0 + localStorage.getItem('pa_expires', '0');
// //         if ((new Date()).getTime() > expires) {
// //           return '';
// //         }
// //         var token = localStorage.getItem('pa_token', '');
// //         return token;
// //       },
// //       setAccessToken: function(token, expires_in) {
// //         localStorage.setItem('pa_token', token);
// //         localStorage.setItem('pa_expires', (new Date()).getTime() + expires_in);
// //         // _token = token;
// //         // _expires = expires_in;
// //       },
// //       getUsername: function() {
// //         var username = localStorage.getItem('pa_username', '');
// //         return username;
// //       },
// //       setUsername: function(username) {
// //         localStorage.setItem('pa_username', username);
// //       },
// //       getUserCountry: function() {
// //         var userCountry = localStorage.getItem('pa_usercountry', 'US');
// //         return userCountry;
// //       },
// //       setUserCountry: function(userCountry) {
// //         localStorage.setItem('pa_usercountry', userCountry);
// //       }
// //     }
// //   // });

// // })();

// (function() {
    
//     function login(callback) {
//         var CLIENT_ID = "a8556ddfad6a4136883d2c2dc6904f51";
//         var REDIRECT_URI = "http://localhost:8085/search.html";
//         function getLoginURL(scopes) {
//             return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
//               '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
//               '&scope=' + encodeURIComponent(scopes.join(' ')) +
//               '&response_type=token';
//         }
        
//         var url = getLoginURL([
//             'user-read-email'
//         ]);
        
//         var width = 450,
//             height = 730,
//             left = (screen.width / 2) - (width / 2),
//             top = (screen.height / 2) - (height / 2);
    
//         window.addEventListener("message", function(event) {
//             var hash = JSON.parse(event.data);
//             if (hash.type == 'access_token') {
//                 callback(hash.access_token);
//             }
//         }, false);
        
//         var w = window.open(url,
//                             'Spotify',
//                             'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
//                            );
        
//     }

//     function getUserData(accessToken) {
//         return $.ajax({
//             url: 'https://api.spotify.com/v1/me',
//             headers: {
//                'Authorization': 'Bearer ' + accessToken
//             }
//         });
//     }

//     var templateSource = document.getElementById('result-template').innerHTML,
//         template = Handlebars.compile(templateSource),
//         resultsPlaceholder = document.getElementById('result'),
//         loginButton = document.getElementById('btn-login');
    
//     // loginButton.addEventListener('click', function() {
//     //     login(function(accessToken) {
//     //         getUserData(accessToken)
//     //             .then(function(response) {
//     //                 loginButton.style.display = 'none';
//     //                 resultsPlaceholder.innerHTML = template(response);
//     //             });
//     //         });
//     // });
//     window.addEventListener("load", function(){
//         login(function(accessToken) {
//       getUserData(accessToken)
//           .then(function(response) {
//               // loginButton.style.display = 'none';
//               resultsPlaceholder.innerHTML = template(response);
//           });
//       });
//     })
    
// })();