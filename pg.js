var imported = document.createElement('script');
imported.src = './jso.js';
document.head.appendChild(imported);


var config = {
    response_type: 'code',
    client_id: '',
    authorization: 'https://api.pgsmartshopassistant.com/o/authorize/',
    redirect_uri: ''
}

class PG {

    constructor() {}

    Init() {
        let client = new jso.JSO(config)
        client.getToken()
    }

    setClientId(id) {
        config.client_id = id
    }

    setRedirectUrl(uri) {
        config.redirect_uri = uri
    }

}
