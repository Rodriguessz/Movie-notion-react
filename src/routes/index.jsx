//BrowserRouter wraps the content of Routes to manage navigation history and handle routing between components
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/authentication";




export const Routes = () => {

    const { user } = useAuth();

    return(
        <>
            <BrowserRouter>
            {
                user ? (<AppRoutes />) : (<AuthRoutes />)
            }
            </BrowserRouter>
        </>
    )
}