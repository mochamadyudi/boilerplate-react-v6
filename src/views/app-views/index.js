import React from 'react'
import PropTypes from 'prop-types'
import {Route, Routes} from 'react-router-dom'
import HomePage from "./home";
import AuthViews from "../auth-views";
const AppViews = ()=> {
    return (
        <React.Fragment>

            <Routes location={'/'}>
                <Route index element={<HomePage/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default AppViews