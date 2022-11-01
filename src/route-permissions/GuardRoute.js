import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Navigate, useNavigate} from "react-router-dom";

const GuardRoute = (props) => {
    let { children, loading,isAuthenticated  } = props
    const navigate = useNavigate()
    useEffect(()=> {
        if (!isAuthenticated) {
            setTimeout(()=> {
                navigate('/auth/login', {replace:true})
            },2000)
        }

    },[isAuthenticated])

    if(isAuthenticated){
        return children
    }
    return 'loading....'
};

GuardRoute.propTypes = {
    loading:PropTypes.bool.isRequired,
    isAuthenticated:PropTypes.bool.isRequired
}
GuardRoute.defaultProps = {
    loading:false,
    isAuthenticated:false
}
export default GuardRoute

// export default connect(()=> {
//     return {}
// },{})(GuardRoute)