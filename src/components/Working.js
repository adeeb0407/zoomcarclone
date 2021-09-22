import React from 'react'
import {AiFillAccountBook} from 'react-icons/ai'
import {AiOutlineIdcard} from 'react-icons/ai'
import {AiOutlineUnlock} from 'react-icons/ai'
import {FaCarAlt} from 'react-icons/fa'
import {GiReturnArrow} from 'react-icons/gi'

function Working() {
    return (
             <div className = 'details'>
            <h2>THE ZOOMCAR ADVANTAGE</h2>
            <br/>
            <p>We simplified car rentals, so you can focus on what's important to you.</p>
            <div className ='carding'>
            <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <AiFillAccountBook style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h5 class="card-title">Fule Const Included</h5>
    <p class="card-text">Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</p>
  </div>
</div>
            <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <AiOutlineIdcard style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h5 class="card-title">Fule Const Included</h5>
    <p class="card-text">Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</p>
  </div>
</div>
            <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <AiOutlineUnlock style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h5 class="card-title">Fule Const Included</h5>
    <p class="card-text">Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</p>
  </div>
</div>
            <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <FaCarAlt style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h5 class="card-title">Fule Const Included</h5>
    <p class="card-text">Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</p>
  </div>
</div>
            <div className="card d-flex justify-content-center" style={{width: '18rem'}}>
                    <GiReturnArrow style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h5 class="card-title">Fule Const Included</h5>
    <p class="card-text">Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</p>
  </div>
</div>
            </div>
            <br/>
            <br/>
            <button className = 'learn'>SIGN UP</button>
            <br/>
            <br/>
        </div>
    )
}

export default Working
