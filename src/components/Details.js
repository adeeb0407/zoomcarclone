import React from 'react'
import { GiGasPump } from 'react-icons/gi';
import {FcMoneyTransfer} from 'react-icons/fc'
import {ImLocation2} from 'react-icons/im'
import {ImRoad} from 'react-icons/im'
import {FaCarCrash} from 'react-icons/fa'
import {FaGifts} from 'react-icons/fa'


function Details() {
    return (
        <div className = 'details'>
            <h2>THE ZOOMCAR ADVANTAGE</h2>
            <br/>
            <p>We simplified car rentals, so you can focus on what's important to you.</p>
            <div className ='carding'>

            <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <GiGasPump style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h5 class="card-title">Fule Const Included</h5>
    <p class="card-text">Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</p>
  </div>
</div>
           <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <FcMoneyTransfer style = {{fontSize : '100px', marginLeft : '100px',}}/>
        <div class="card-body">
    <h5 class="card-title">No Hidden Charges</h5>
    <p class="card-text">Our prices include taxes and insurance.
What you see is what you really pay!</p>
  </div>
</div>
           <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <FaGifts style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h5 class="card-title">Flexi Pricing Packages</h5>
    <p class="card-text">One size never fits all! Choose a balance of time and kilometers that works best for you.</p>
  </div>
</div>
            </div>


            <div className ='carding'>

            <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <ImLocation2 style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h5 class="card-title">Go Anywhere</h5>
    <p class="card-text">Our cars have all-India permits.  Just remember to pay state tolls and entry taxes.</p>
  </div>
</div>
           <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <ImRoad style = {{fontSize : '100px', marginLeft : '100px',}}/>
        <div class="card-body">
    <h5 class="card-title">24x7 Roadside Assistance</h5>
    <p class="card-text">We have round-the-clock, pan India partners. Help is never far away from you.</p>
  </div>
</div>
           <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <FaCarCrash style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h5 class="card-title">Damage Insurance</h5>
    <p class="card-text">All your bookings include damage insurance! Drive safe, but don’t worry!</p>
  </div>
</div>
            </div>
            
        </div>
    )
}

export default Details
