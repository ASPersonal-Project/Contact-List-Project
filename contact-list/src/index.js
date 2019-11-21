import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider}  from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from './components/reducer';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; 
const store = createStore(
    reducer,composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    
    ,document.querySelector('#root')
)