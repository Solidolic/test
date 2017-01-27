import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Link} from 'react-router'
import Menu from 'material-ui/Menu';

export default class MenuBar extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            open: false
        };
    };

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    };

    iconMenuClickButtonHandler = () => {
        this.setState({
            open: true
        });
    };

    onRequestChangeHandler = () => {
        this.setState({
            open: false
        });        
    };
    
    test = () => {
        console.log('hi')
    }
    
    render(){
        return (
            <AppBar title="No name application">
                <IconMenu
                    iconButtonElement={<IconButton style={iconsStyle} onClick={this.iconMenuClickButtonHandler}><MoreVertIcon color="white"/></IconButton>}
                    open={this.state.open}
                    onRequestChange={this.onRequestChangeHandler}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                    <MenuItem primaryText="Main" value="1" containerElement={<Link to="/" />} /> 
                    <MenuItem primaryText="Tasks" value="2" containerElement={<Link to="/list" />} />
                    <MenuItem primaryText="Sign in" value="3" containerElement={<Link to="/login" />} />
                </IconMenu>
            </AppBar>
        )
    }
}

MenuBar.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};


const iconsStyle = {
    marginTop: '8px'
};

