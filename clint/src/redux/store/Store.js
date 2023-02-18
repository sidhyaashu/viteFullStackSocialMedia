import { createStore,applyMiddleware ,compose} from 'redux'
import thunk from "redux-thunk"
import {reducer} from '../reducers/combineReducers.js'



function saveTolocalStore(store) {
    try {
       const serializedStore = JSON.stringify(store);
       window.localStorage.setItem('store',serializedStore); 
    } catch (error) {
        console.log(error)
    }
}

function loadFroamLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if(serializedStore==null) return undefined;
        return JSON.parse(serializedStore);

    } catch (error) {
        console.log(error);
        return undefined
    }
    
}



const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;
const presistetedState = loadFroamLocalStorage();



const store = createStore(reducer,presistetedState,composeEnhencer(applyMiddleware(thunk)));
store.subscribe(()=>saveTolocalStore(store.getState()));

export default store




























// import { createStore,applyMiddleware } from 'redux'
// import thunk from "redux-thunk"
// import {reducer} from '../reducers/combineReducers.js'


// const store = createStore(reducer,(applyMiddleware(thunk)));
// store.subscribe(()=>console.log(store.getState()));

// export default store
