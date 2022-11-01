import React from 'react'
import {Outlet, useNavigate,useLocation,useMatches} from "react-router-dom";

function Breadcrumbs() {
    let matches = useMatches();
    let crumbs = matches
        // first get rid of any matches that don't have handle and crumb
        .filter((match) => Boolean(match.handle?.crumb))
        // now map them into an array of elements, passing the loader
        // data to each one
        .map((match) => match.handle.crumb(match.data));

    return (
        <ol>
            {crumbs.map((crumb, index) => (
                <li key={index}>{crumb}</li>
            ))}
        </ol>
    );
}
const AuthLayout = (props)=> {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className="w-full min-h-screen bg-gray-50">
            <div className="w-full grid grid-cols-12 gap-4">
                <div className="col-span-8 order-1 flex flex-col items-center justify-center">
                    <Outlet/>
                </div>
                <div className="col-span-4 order-2">
                    <div className="h-screen w-full bg-blue-500">
                        <Breadcrumbs/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AuthLayout