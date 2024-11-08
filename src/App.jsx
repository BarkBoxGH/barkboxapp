
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import Status from './components/Status'
import VendorSignUp from './components/VendorSignUp'
import VendorLogin from './components/VendorLogin'
import UserSignUp from './components/UserSignUp'
import UserLogin from './components/UserLogin'



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/usersignup",
      element:<UserSignUp/>
    },
    {
      path:"/userlogin",
      element:<UserLogin/>
    },
    {
      path:"/status",
      element:<Status/>
    },
    {
      path:"/vendorsignup",
      element:<VendorSignUp/>
    },
    {
      path:"/vendorlogin",
      element:<VendorLogin/>
    }
    
  ])

  return <RouterProvider router={router}/>

}


export default App
