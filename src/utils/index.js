export default class Utils {
    static clearPath(paths = ""){
        return paths.split('/')
    }
    static getToken(type = 'get') {
        try {
            switch (type) {
                case "get":
                    if (localStorage.getItem("token")) {
                        return localStorage.getItem("token")
                    }
                    return null
                case "remove":
                    if (localStorage.getItem("token")) {
                        localStorage.removeItem('token')
                        return true
                    }
                    return true
                default:
                    if (localStorage.getItem("token")) {
                        return localStorage.getItem("token")
                    }
                    return null


            }


        } catch (err) {
            return null
        }

    }
}