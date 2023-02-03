import React from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }} className="Header">
      <NavLink to={'/'}>main</NavLink>
      <NavLink to={'/register'}>register</NavLink>
      <NavLink to={'/login'}>login</NavLink>
      <NavLink to={'/recovery'}>recovery</NavLink>
      <NavLink to={'/new'}>new</NavLink>
      <NavLink to={'/profile'}>profile</NavLink>
      <NavLink to={'/test'}>test</NavLink>
    </div>
  )
}