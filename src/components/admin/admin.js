import React from 'react'

export default class Admin extends React.Component{
    render(){
        return(
            <div>Раздел /Админ</div>
        )
    }

    static onEnter(nextState, replace) {
        const login = window.localStorage.getItem('rr_login')
        if (login !== 'admin') {
            replace('/');
        }
    }
}
