import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AuthComponent from './components/AuthComponent'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-24 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar/>
      <AuthComponent/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/buy' element={<BuyCredit/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
