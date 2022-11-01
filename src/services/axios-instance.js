import axios from 'axios'
import Utils from "../utils";



let DOMAIN_URL = ""
if(process.env.NODE_ENV === "production"){
    DOMAIN_URL = "http://localhost:5000/api"
}else{
    DOMAIN_URL = "https://project-1.moonlay.com/api"
}

let TOKEN = null;
if (localStorage.getItem("token")) {
    try {
        let NewToken = localStorage.getItem('token')
        if (typeof (NewToken) !== "undefined") {
            TOKEN = NewToken
        }
    } catch (err) {
        TOKEN = ""
    }
}

let headers = {
    "Authorization": Utils.getToken() ?? TOKEN
}


const AxiosInstance = axios.create({
    baseURL: DOMAIN_URL,
    headers: {
        ...headers,
    },
})

AxiosInstance.isCancel = axios.isCancel;

AxiosInstance.interceptors.response.use(
    (res) =>
        new Promise((resolve, reject) => {
            if (res.data.error === 'Unauthorized') {
            } else {
                resolve(res)
            }
        }),

    (err) => {
        if (!err.response) {
            return new Promise((resolve, reject) => {
                reject({...err})
            })
        }
        if (err.response.status === 401) {
            return new Promise((resolve, reject) => {
                reject(err)
            })
            // store.dispatch(signOut())
        } else {
            return new Promise((resolve, reject) => {
                reject({...err?.response?.data})
            })
        }
    }
)

export default AxiosInstance;
