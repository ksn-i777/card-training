import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Test } from '../Test'
import { Header } from '../components/Header'


export function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<div>Main</div>} />
        <Route path='/register' element={<div>Register</div>} />
        <Route path='/login' element={<div>Login</div>} />
        <Route path='/recovery' element={<div>Recovery password</div>} />
        <Route path='/new' element={<div>New password</div>} />
        <Route path='/profile' element={<div>Profile</div>} />
        <Route path='/404' element={<div>404</div>} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </div>
  )
}