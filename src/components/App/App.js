import React from 'react'

import styles from './App.css';
//import Admin from '../admin/admin';
//import User from '../user/user';
//import DoubleUser from '../home/home';
//import Header from '../header/header';
import { Link } from 'react-router'
import style from './App.css'


export default class App extends React.Component {
	render() {
		return (
			/*<div className={styles.app}>
				<Header param={111} />
                <Admin />
				bar
			</div>*/

            <div className='container'>
                <ul className='nav nav-pills'>
                    <li><Link to='/' activeClassName={style.active}>Главную</Link></li>
                    <li><Link to='/admin'>Админ</Link></li>
                    <li><Link to='/list'>Список жанров</Link></li>
                    <li><Link to='/login'>Войти</Link></li>
                </ul>
                {this.props.children}
            </div>
		);
	}
}
