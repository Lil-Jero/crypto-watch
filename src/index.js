import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";

// Redux
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);