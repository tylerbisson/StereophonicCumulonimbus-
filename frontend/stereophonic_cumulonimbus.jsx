import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionActions from './actions/session_actions';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    //TESTINGTESTINGTESTING
    window.login = sessionActions.login;
    // window.signup = sessionAPIUtil.signup;
    // window.logout = sessionAPIUtil.logout;
    // we don't put the store directly on the window because
    // it can be confusing when debugging, sometimes giving you access to state
    // when you shouldn't
    window.getState = store.getState;
    window.dispatch = store.dispatch; // just for testing!
    //TESTINGTESTINGTESTING
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Stereophonic Cumulonimbus</h1>, root);
    ReactDOM.render(<Root store={ store }/>, root);
});