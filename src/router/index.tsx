import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import GetStarted from '../pages/GetStarted';
import Products from '../pages/Products';
import Solutions from '../pages/Solutions';
import Pricing from '../pages/Pricing';
import Resourses from '../pages/Resourses';



const router =  createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route index element={<GetStarted />}/>
        <Route path='products' element={<Products />}/>
        <Route path='solutions' element={<Solutions />}/>
        <Route path='pricing' element={<Pricing />}/>
        <Route path='resourses' element={<Resourses />}/>
    </Route>
))

export default router;