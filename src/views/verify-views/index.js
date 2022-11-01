import React from 'react'
import PropTypes from 'prop-types'
import {Outlet, Route, Routes} from "react-router-dom";
import VerifyEmailPage from "./verify-email";
const ElementView = ()=> {
    return (
        <div>
            <h1>Element</h1>
            <Outlet/>
        </div>
    )
}
const VerifyViews = ()=> {
    return (
        <Routes>
            <Route path="*" element={<ElementView/>}>
                <Route index element={<VerifyEmailPage/>}/>
            </Route>

        </Routes>
    )
}

export default VerifyViews