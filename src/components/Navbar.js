import React from 'react'
import zoomcar from './images/zoomcar.svg'
import zoomcarBlack from './images/zoomcarBlack.png'
import GooglePlay from './images/GooglePlay.png'
import Apple from './images/apple.svg'
import './styles/main.css'
import Amigo from './images/amigo.jpg'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
        <div class="container-fluid" style = {{backgroundColor : '#334355'}}>
          <a class="navbar-brand" href="#"><img src={zoomcar} alt="" width="150" height="50" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">OFFERS</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SUBSCRIPTION
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li style = {{width : '300px', textAlign : 'center'}}><a class="dropdown-item" href="#"><img src = {zoomcarBlack} width = '130px'/></a>
                  <br/>
                  <p style = {{fontSize : '12px',}} class = 'mx-2'>Hassle-free way of getting your personal car for flexible long term duration. You also have an option to share your car with other Zoomcar customers & save up to 70% of the monthly subscription fee.</p>
                  <button className = 'knowmore'>Know More</button>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 AMIGO
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li style = {{width : '300px', textAlign : 'center'}}><a class="dropdown-item" href="#"><img src = {Amigo} width = '130px'/></a>
                  <br/>
                  <p style = {{fontSize : '12px',}} class = 'mx-2'>A unique Community Vehicle Pooling program that allows you to share your car with your community and friends while the car not in use and earn money.</p>
                  <button className = 'knowmore'>Know More</button>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropd own-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ZMS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li style = {{width : '300px', textAlign : 'center'}}><a class="dropdown-item" href="#"><img src = {zoomcarBlack} width = '130px'/></a>
                  <br/>
                  <p style = {{fontSize : '12px',}} class = 'mx-2'>Connected technology offerings and shared mobility solutions for businesses worldwide.</p>
                  <button className = 'knowmore'>Know More</button>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MOBILE APP
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#"><img src = {GooglePlay} style = {{color : 'black'}} width = '130px' /></a></li>
                  <li><a class="dropdown-item" href="#"><img src = {Apple} style = {{color : 'black'}}  width = '130px' height = '30px'/></a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">SIGNUP/LOGIN</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#"><img src = {zoomcarBlack} style = {{color : 'black'}} /></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
