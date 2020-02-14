import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom/";
import messagesReducer from "./store/reducers/messagesReducer";

const store = createStore(messagesReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
