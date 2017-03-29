import React from 'react'
import {Link} from 'react-router'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


export default class List extends React.Component{
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    };
    
    render(){
        const style = {
            display: 'inline-block',
            margin: '16px 32px 16px 0',
        };
        
        return(
            <div>
                <Paper style={style}>
                    <Menu>
                        <MenuItem primaryText="NotesApp" containerElement={<Link to='/genre/notesApp/' />}>
                        </MenuItem>
                        <MenuItem primaryText="Test" containerElement={<Link to='/genre/test/' />}/>
                        <MenuItem primaryText="Calendar" containerElement={<Link to='/genre/calendar/' />}/>
                        <MenuItem primaryText="ConnectionTask" containerElement={<Link to='/genre/connectionsTask/' />}/>
                        <MenuItem primaryText="Apps" containerElement={<Link to="/" />}/>
                    </Menu>
                </Paper>
            </div>
        )
    }
}


List.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};