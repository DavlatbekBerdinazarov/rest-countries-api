
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from "../layout/MainLayout";
import ElementDetail from "../pages/ElementDetail";
import Countries from '../pages/Countries';


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Countries/>,
            },
            {
                path:'/country/:countryName',
                element:<ElementDetail/>
            }
        ]
    }
])


