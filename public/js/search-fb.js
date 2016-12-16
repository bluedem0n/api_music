// cargamos el sdk de forma asincrónica
(function (d) {
    var js, id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));
window.fbAsyncInit = function () {
    FB.init({
        appId: '1880527322233422',
        status: true,
        cookie: true,
        xfbml: true,
        oauth: true
    });
    FB.Event.subscribe('auth.statusChange', function (response) {
        if (response.authResponse) {
            FB.api('/me', {
                fields: 'name,email'
            }, function (me) {
                if (me.name) {
                    document.getElementById('name').innerHTML = me.name;
                    document.getElementById('mail').innerHTML = me.email;
                    document.getElementById('profile').innerHTML =
                        '<img class="circle" src="https://graph.facebook.com/' + me.id + '/picture?type=large">';
                }
            })
        } else {
            window.location = "index.html";
        }
    }, {
        'scope': 'email'
    });

    document.getElementById('logout').addEventListener('click', function () {
        FB.logout();
    });
}
