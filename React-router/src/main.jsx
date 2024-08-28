import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Body from './Component/Body.jsx'
import Footer from './Component/Footer.jsx'

const router = createBrowserRouter([
  {
path: '/',
element: <App/>,
children :  [
  {
    path: "",
    element: <Body />
    },{
    path:"Header",
    element:<Header/>
  },
  {
    path:"footer",
    element:<Footer/>
  }
]}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App router={router} />
  </StrictMode>,
)
