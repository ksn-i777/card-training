import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Test } from '../Test'


export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>main</div>} />
        <Route path='/register' element={<div>register</div>} />
        <Route path='/login' element={<div>login</div>} />
        <Route path='/recovery' element={<div>recovery-password</div>} />
        <Route path='/new' element={<div>new-password</div>} />
        <Route path='/profile' element={<div>profile</div>} />
        <Route path='/404' element={<div>404</div>} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </div>
  )
}