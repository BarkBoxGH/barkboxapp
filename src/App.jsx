
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Status from './components/Status'
import VendorSignUp from './components/VendorSignUp'
import VendorLogin from './components/VendorLogin'



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"/login",
      element:<LogIn/>
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
