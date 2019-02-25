import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import datasetReducer from './store/reducers/datasetReducer';
import datasetInfo  from './store/reducers/datasetInfoReducer';
import conceptInfo from './store/reducers/conceptInfoReducer';
import sliceInfo from './store/reducers/sliceReducer';
import querySlice from './store/reducers/querySliceReducer';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

//const composeEnhancers =  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
     dat: datasetReducer,
     datInfo: datasetInfo,
     cpi: conceptInfo,
     sci: sliceInfo,
     slq:querySlice
});

const store = createStore(rootReducer,(
   applyMiddleware(thunk)
));
const app = (
     <Provider store={store}>
        <BrowserRouter>
           <App/>
        </BrowserRouter>
     </Provider> 
);     
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
