import React from 'react';

export function singUpToServer() {
    let sessionKey = _getCookie();

    _checkSession();

    if (sessionKey === undefined) {
        _getNewSession(function (data) {
            _setCookie(data);
        }.bind(this))
    }
}

function _setCookie(sessionKey) {
    let name = 'key',
        updatedCookie = name + "=" + sessionKey;

    document.cookie = updatedCookie;
};

function _getCookie() {
    let name = 'key';
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function _checkSession(){
    var request = new XMLHttpRequest();

    request.open('GET', 'https://private-anon-538ce420ef-testfrontend1.apiary-mock.com/session');

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('session recovered');
        }
    };

    request.send();
}

function _getNewSession(cb) {
    let request = new XMLHttpRequest();

    request.open('POST', 'https://private-anon-538ce420ef-testfrontend1.apiary-mock.com/signup');

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            cb(JSON.parse(this.responseText)['session']);
        }
    };
    request.send();
}
