import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";


function switchRoutes (routes) {

    return (
    <Switch>
        {routes.map(function hello(prop, key) {
            if(prop.subRouts != undefined){
                return(
                    <div>
                        <Route
                            path={prop.path}
                            component={prop.component}
                            key={key}
                        />
                        {
                            switchRoutes(prop.subRouts)
                        }
                    </div>
                );
            }else{
                return(
                    <div>
                        <Route
                            path={prop.path}
                            component={prop.component}
                            key={key}
                        />
                    </div>
                );
            }
        })}
    </Switch>
    )
};


ReactDOM.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

