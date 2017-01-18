import React from 'react';
import styles from './App.css';
import Admin from '../admin/admin';
import Header from '../header/header';



export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {test: 'foo'};
	}

	render() {
		return (
			<div className={styles.app}>
				<Header param={111} />
				bar
			</div>
		);
	}
}
