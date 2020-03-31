import React from 'react'
import Login from './Login'
import Signin from './Signin'
import Details from './Details'

export default function App() {
  return (
    <div> 
      <div  Style="display:none;">
        <Login />
      </div>
      <div Style="display:none;">
      <Signin />
      </div>
      <div>
        <Details />
      </div>
    </div>
  )
}
