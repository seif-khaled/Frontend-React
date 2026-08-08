import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Dashboard.jsx'
import Inventory from './Inventory.jsx'
import Shop from './shop.jsx'


const router=createBrowserRouter([

{
  path:'/dashboard',
  element:<App/>,
  children:[
    {index:true,element:<Dashboard/>},
    {path:'equipment',element:<Inventory/>},
    {path:'shop',element:<Shop/>}]
}
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
