var imported = document.createElement('script');
imported.src = './jso.js';
document.head.appendChild(imported);


var config = {
    response_type: 'code',
    client_id: '',
    authorization: 'https://api.pgsmartshopassistant.com/o/authorize/',
    redirect_uri: ''
}

let CODE = new URLSearchParams(window.location.search).get('code');
let CLIENT_ID = "CtH2uIW608WiRah3rhU5R8EX2AGXKHlA0HDDLnrv";
let CLIENT_SECRET = "lhA3Bp8CYke6gtwEOEHV7u5kLI0mOOM78xkzOXUbQxJPlq7IZPFiTP9aNw6rHo3ZhwgwhuXsqsJjzOEd4KZX9yshXgp5dt48AHxP6wkBpjdtCzSsR8o6ywcGO7D3V2Hx";
let URL = 'https://api.pgsmartshopassistant.com/o/token/';

class PG {

    constructor() {}

    Init() {
        if (CODE != null) {
            this.getTokens();
        } else {
            let client = new jso.JSO(config)
            client.getToken()
        }
    }

    setClientId(id) {
        config.client_id = id
    }

    setRedirectUrl(uri) {
        config.redirect_uri = uri
    }

    getTokens() {
        var http = new XMLHttpRequest();
        var params = 'grant_type=authorization_code&code=' + CODE + '&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&redirect_uri=http://localhost:8080/';
        http.open('POST', URL, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function() { //Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                localStorage.setItem('token', JSON.parse(http.responseText).access_token);
                window.location.replace("http://192.168.1.10:8086/api/micro_site");
            }
        }
        http.send(params);
    }
}
