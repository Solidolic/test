import React from 'react'

export default class Selection extends React.Component{
    onChange(e) {
        this.props.onChangeBox({
            [e.target.getAttribute('data-type')]: e.target.checked
        });
    }

    render() {
        return (
            <div className="selection-task">
                <input type="checkbox" value="In_progress" data-type='0' onChange={this.onChange}/> In progress <br />
                <input type="checkbox" value="Done" data-type="1" onChange={this.onChange}/> Done <br />
                <input type="checkbox" value="New" data-type="2" onChange={this.onChange}/> New <br />
            </div>
        )
    }
}
