import React from 'react'
import greenscreen from './images/greenscreen.jpg'
import suv from './images/suv.png'
import luxury from './images/luxury.png'
import hatchback from './images/hatchback.png'

function ExtraThrid() {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={greenscreen} class="d-block w-100" alt="..." />
      <img src={suv} class="d-block w-100" alt="..." style = {{position: "absolute", top: "0", left: "0", width : '20%'}} width = '10px'/>
      <div class="carousel-caption d-none d-md-block">
        <h1>SUV</h1>
        <h3>Price Starting at ₹ 80/hr (Fuel Free)</h3>
        <p>CARS AVAILABLE: FORD ECOSPORT, MAHINDRA SCORPIO, FORD ENDEAVOUR, FORD ECOSPORT AT, HYUNDAI CRETA, TOYOTA FORTUNER</p>
        <p>Head outstation with the entire family</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={greenscreen} class="d-block w-100" alt="..." />
    <img src={hatchback} class="d-block w-100" alt="..." style = {{position: "absolute", top: "0", left: "0", width : '20%'}} width = '10px'/>
      <div class="carousel-caption d-none d-md-block">
        <h1>HATCHBACK</h1>
        <h3>Price Starting at ₹ 80/hr (Fuel Free)</h3>
        <p>CARS AVAILABLE: FORD ECOSPORT, MAHINDRA SCORPIO, FORD ENDEAVOUR, FORD ECOSPORT AT, HYUNDAI CRETA, TOYOTA FORTUNER</p>
        <p>Head outstation with the entire family</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={greenscreen} class="d-block w-100" alt="..." />
    <img src={luxury} class="d-block w-100" alt="..." style = {{position: "absolute", top: "0", left: "0", width : '20%'}} width = '10px'/>
      <div class="carousel-caption d-none d-md-block">
        <h1>LUXURY</h1>
        <h3>Price Starting at ₹ 170/hr (Fuel Free)</h3>
        <p>CARS AVAILABLE: MERCEDES GLA, AUDI Q3</p>
        <p>Go out for a special meal</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default ExtraThrid
