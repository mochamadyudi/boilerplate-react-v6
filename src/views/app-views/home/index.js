import React from 'react'
import PropTypes from 'prop-types'
import {Outlet, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import GuardRoute from "../../../route-permissions/GuardRoute";

const HomePage = (props) => {
    return (
        <div className="w-full">
            <Routes>
                <Route path={"*"} element={<><Outlet/></>}>
                    <Route index element={<div>hellooo</div>}/>
                </Route>
            </Routes>
        </div>
    )
}

HomePage.propTypes = {}
HomePage.defaultProps = {}

export default HomePage