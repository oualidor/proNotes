import './App.css';
import React from "react";

import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";

import visitorRouters from "./routes";


const switchRoutes = (
    <Switch>
        {visitorRouters.map((prop, key) => {

                return (
                    <Route
                        path={prop.path}
                        component={prop.component}
                    />
                );

            return null;
        })}
        <Redirect from="/" to="/Landing" />
    </Switch>
);


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {


    }

     render() {

       return (
            <React.Fragment>
                <BrowserRouter>{switchRoutes}                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
