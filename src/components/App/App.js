import React from 'react';
import MenuBar from '../menuBar/menuBar';


export default class App extends React.Component {
	render() {
		return (
             <div>
                 <MenuBar />
                 {this.props.children}
             </div>
		);
	}
}



