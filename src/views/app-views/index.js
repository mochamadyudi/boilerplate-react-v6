import React from 'react'
import PropTypes from 'prop-types'
import {Route, Routes} from 'react-router-dom'
import HomePage from "./home";
import AuthViews from "../auth-views";
import GuardRoute from "../../route-permissions/GuardRoute";
const AppViews = ()=> {
    return (
        <React.Fragment>

            <Routes location={'/'}>
                <Route index element={<GuardRoute children={<HomePage/>}/>} errorElement={'Error Element'}/>
            </Routes>
        </React.Fragment>
    )
}

export default AppViews