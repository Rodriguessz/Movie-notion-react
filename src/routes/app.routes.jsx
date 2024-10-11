import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { New } from '../pages/New'

export const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/new' element={<New />} />
            </Routes>
        </>
    )
    
}