import React from 'react'

export function postData(){
    return fetch('https://private-anon-9b168665de-testfrontend1.apiary-mock.com/tasks/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Project: {
                id: 124
            },
            Task: {
                title: "Some title",
                description: "Some description"
            }
        })
    })
    
}