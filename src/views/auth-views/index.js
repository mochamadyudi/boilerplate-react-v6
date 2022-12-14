import React from 'react'
import {Route, Routes} from "react-router-dom";
import SignInPage from "./sign-in";
import SignUpPage from "./sign-up";
import AuthLayout from "../../components/layout-shared/AuthLayout";
import NotFound from "../errors-views/not-found";

const AuthViews = (props) => {

    return (
        <Routes>
            <Route path="*" element={<AuthLayout/>} errorElement={'Error Element'}>
                <Route index element={<SignInPage/>} errorElement={'Error Element'}/>
                <Route path="login" element={<SignInPage/>} errorElement={'Error Element'}/>
                <Route path="register" element={<SignUpPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default AuthViews