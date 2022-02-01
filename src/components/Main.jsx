import React from 'react'
import rocketImg from '../assets/rocket.png'
import Signup from './Signup'

const Main = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7">
          <img src={rocketImg} className="img-fluid w-100" />
        </div>
      </div>
    </div>
  )
}

export default Main
