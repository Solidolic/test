import React from 'react'
import {Link} from 'react-router'

export default class NotFound extends React.Component{
    render(){
        return(
            <div>
                <div>Такой страницы нет, <Link to="/">на главную</Link>?</div>
            </div>
        )
    }
}
