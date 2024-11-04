import { Route, Routes, Navigate } from "react-router-dom";

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp' 


export const AuthRoutes = () => {

    //Gets the user data from localStorage to verify if the user is logged or not;
    //Will be necessary to treat the unvaible routes. If the user is not logged and call a route tha does not exist, will be send to the home page;
    const user = localStorage.getItem("@rocketmovies:user");

    return(
        <>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                
                {/* Checks the user situation before redirect. If the user is not logged and calls a wrong route, send to the home page; */}
                {!user && <Route path="*" element={<Navigate  to="/"/>} />}
                
            </Routes>
        </>
    )
}