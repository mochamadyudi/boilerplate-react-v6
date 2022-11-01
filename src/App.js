import React, {lazy} from 'react'
import './App.css';
import {
    Routes,
    Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import AppViews from "./views/app-views";
import NotFound from "./views/errors-views/not-found";
import AuthViews from "./views/auth-views";
import VerifyViews from "./views/verify-views";
import {route} from "./config";

function App() {


    const router = createBrowserRouter(route);
    return (
        <React.Fragment>
            <RouterProvider router={router}/>

        </React.Fragment>
    );
}

export default App;
