import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import UncheckedBox from 'material-ui/svg-icons/Toggle/radio-button-unchecked';
import CheckedBox from 'material-ui/svg-icons/Toggle/radio-button-checked';
import Styles from '../main.css'


export default class Task extends React.Component{
    constructor (props){
        super(props)
    };
    
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    };
    
    render(){
        let labelStyle = {
            width: '1%',
            paddingLeft: '3%',
            borderLeft: '1px solid darkgrey'
        };

        let checkBoxStyle = {
            width: '20%'
        };
        
        return(
            <div className={Styles.element}>
                <Checkbox checkedIcon={<CheckedBox />}
                          uncheckedIcon={<UncheckedBox />}
                          defaultChecked={false}
                          labelStyle={labelStyle}
                          label={' '}
                          style={checkBoxStyle}
                />
                <span className={Styles.titleStyle}>{this.props.title}</span>
            </div>
        )
    }
}

Task.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};


