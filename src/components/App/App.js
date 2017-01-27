import React from 'react';
import MenuBar from '../menuBar/menuBar';
import {Link} from 'react-router';


export default class App extends React.Component {
	render() {
		return (
             <div>
                 <MenuBar />
                 {this.props.children}
             </div>
            //   <div>
            //       <ul>
            //           <li><Link to='/'>Главную</Link></li>
            //           <li><Link to='/admin'>Админ</Link></li>
            //           <li><Link to='/list'>Список тестовых</Link></li>
            //           <li><Link to='/login'>Войти</Link></li>
            //       </ul>
            //       {this.props.children}
            //   </div>
		);
	}
}



