import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../components/App/App';
import Admin from '../components/admin/admin';
import List from '../components/list/list';
import Home from '../components/home/home';
import NotFound from '../components/notFound/notFound';
import Genre from '../components/genre/genre';
import Login from '../components/login/login';
import NotesApp from './notesApp/notesApp';

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/admin' component={Admin} onEnter={Admin.onEnter}/>
            <Route path='/genre' component={Genre}>
                <Route path='/genre/:release' component={NotesApp} />
            </Route>
            <Route path='/list' component={List}/>
            <Route path='/login' component={Login}/>
        </Route>
        <Route path='*' component={NotFound} />
        
    </div>
);



