import React from 'react';
import Main from '../../components/releases/requests/index';

export default class App extends React.Component{
    constructor (props){
        super(props)
    };
    
    render (){
        return (
            <div>
                <Main />
            </div>
        )
    }
}
