import React from 'react'
import { Link } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Style from './App.css'
import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {open:false};
    }
    
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    
	render() {
		return (
            <div>
                <AppBar>
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon style={{marginRight: '-80px'}}/></IconButton>}
                        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    >
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Send feedback" />
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                    </IconMenu>
                </AppBar>
            </div>
             // <div>
             //     <ul>
             //         <li><Link to='/' activeClassName={Style.active}>Главную</Link></li>
             //         <li><Link to='/admin'>Админ</Link></li>
             //         <li><Link to='/list'>Список тестовых</Link></li>
             //         <li><Link to='/login'>Войти</Link></li>
             //     </ul>
             //     {this.props.children}
             // </div>
		);
	}
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

const iconsStyle = {
    marginRight: -80
};

