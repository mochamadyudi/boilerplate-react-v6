import AppViews from "../views/app-views";
import AuthViews from "../views/auth-views";
import SignInPage from "../views/auth-views/sign-in";
import SignUpPage from "../views/auth-views/sign-up";
import HomePage from "../views/app-views/home";
import VerifyViews from "../views/verify-views";

const route = [
    {
        path: "/",
        element: <HomePage />,
        loader: null,
    },

    {
        path: "auth",
        element: <AuthViews />,
        loader: null
    },
    {
        path: "verify",
        errorElement: "Error Element",
        element:<VerifyViews/>,
        loader:null
    }
]

export  { route }