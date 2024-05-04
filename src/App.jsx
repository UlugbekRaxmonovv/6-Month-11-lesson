import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import NotFound from './pages/not-found/NotFound'
import SingleRoute from './pages/single-route/SingleRoute'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
     <Navbar/>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Login/>}/>
      <Route path='/product/:id' element={<SingleRoute/>}/>

      <Route path='/' element={<Auth/>}>
        <Route path='admin' element={<Admin/>}>
      </Route>
      </Route>

      <Route path='*' element={<NotFound/>}/>
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App
