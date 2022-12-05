//? Step 3 README: import applyMiddleware next to createStore
import { createStore, applyMiddleware } from 'redux';

//? Step 3 README: import thunk from 'redux-thunk'
import thunk from 'redux-thunk';

import reducers from './reducers';
import state from './state';

//? Step 3 README: Add applyMiddleware(thunk) as last argument in createStore method.
export default createStore(reducers, state, applyMiddleware(thunk));
