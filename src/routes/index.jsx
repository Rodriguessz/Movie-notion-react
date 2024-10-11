//BrowserRouter wraps the content of Routes to manage navigation history and handle routing between components
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";




export const Routes = () => {
    return(
        <>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </>
    )
}