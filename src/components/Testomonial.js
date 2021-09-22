import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'

function Testomonial() {
    const iconStyle = {fontSize: '30vh', paddingTop : '30px', color: 'lightgreen'}
    return (
        <div  id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner testi" style = {{height : '600px'}}>
    <div class="carousel-item active">
    <ImQuotesLeft style = {iconStyle}/>
    <h3>At the outset, let me thank you for introducing Zoomcar in Bangalore and for giving me an opportunity to use your service. Your customer support was impeccable and vehicle was well-maintained and top-notch.</h3>
    <br /> 
    <h2 style = {{color : 'lightgreen'}}>-D.Samule</h2>
    </div>
    <div class="carousel-item">
    <ImQuotesLeft style = {iconStyle}/>
    <h3>I just wanted to let you know that I really appreciate the efforts you are making personally, to ensure that the customer is satisfied... I really hope you carry forward this culture and make a model for other companies.</h3>
    <br /> 
    <h2 style = {{color : 'lightgreen'}}>- Bejoy Babu</h2>
    </div>
    <div class="carousel-item">
    <ImQuotesLeft style = {iconStyle}/>
    <h3>You certainly do have a very regular customer here... Must say, Greg went that extra mile... You have a great journey together!</h3>
    <br /> 
    <h2 style = {{color : 'lightgreen'}}>- Deepak Sharma</h2>
    </div>
    <div class="carousel-item">
    <ImQuotesLeft style = {iconStyle}/>
    <h3>Select your car. Pay. Drive. Return. The zoomcar booking process is as simple as this. Butter cannot be smoother than this.</h3>
    <br /> 
    <h2 style = {{color : 'lightgreen'}}>- Diptarko C</h2>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    )
}

export default Testomonial
