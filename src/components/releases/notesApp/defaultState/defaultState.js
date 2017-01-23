import React from 'react'


export default class DefaultState extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            state: this.props.isSelected,
            color: this.props.color
        }
    }

    isChanged = () => {
        this.state.state ? this.setState({state: 0, color: '#d0712e'}) : this.setState({state: 1, color: '#44c767'});
        this.props.onChangElemState();
    }
    
    render(){
        var style = {backgroundColor: this.state.color}
        return (
            <select value={this.state.state} onChange={this.isChanged} ref="select" style={style}>
                <option value="1" >Done</option>
                <option value="0" >In progress</option>
            </select>
        )
    }
}
