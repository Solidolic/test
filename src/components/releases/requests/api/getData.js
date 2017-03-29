import React from 'react';
import $ from "jquery";

export function getData(){
    /*let a = [];
    $.ajax({
        method: "GET",
        url: "https://private-anon-9b168665de-testfrontend1.apiary-mock.com/tasks?session=485fc381-e790-47a3-9794-1337c0a8fe68&project_id=123&condition_keywords=Some%20keywrods&paging_size=20&paging_offset=10&New%20item=&New%20item=",
        success: function (api) {
            a = api.tasks;
        }.bind(this)
    });
    return a;*/
    return fetch('https://private-anon-9b168665de-testfrontend1.apiary-mock.com/tasks?session=485fc381-e790-47a3-9794-1337c0a8fe68&project_id=123&condition_keywords=Some%20keywrods&paging_size=20&paging_offset=10&New%20item=&New%20item=')
        .then(r => r.json());
    
}
