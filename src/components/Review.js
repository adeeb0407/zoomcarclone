import React from 'react'
import {GiSteeringWheel} from 'react-icons/gi'
import {BiHappyAlt} from 'react-icons/bi'
import {GiSpeedometer} from 'react-icons/gi'
import {GiCarSeat} from 'react-icons/gi'
import {BsStarFill} from 'react-icons/bs'

function Review() {
    return (
        <div className = 'review'>
                    <div className ='carding' style = {{justifyContent : 'space-around', paddingTop : '25px'}}>
            <div className="card d-flex justify-content-center" style={{width: '18rem', border : 'none'}}>
                    <GiSteeringWheel style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h2 style = {{color : 'black', fontWeight : 'bolder'}} class="card-title">3,000+</h2>
    <p class="card-text">Rides Daily</p>
  </div>
</div>
            <div className="card d-flex justify-content-center" style={{width: '18rem', border : 'none'}}>
                    <BiHappyAlt style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h2 style = {{color : 'black', fontWeight : 'bolder'}} class="card-title">48,00,000+</h2>
    <p class="card-text">Happy Users</p>
  </div>
</div>
            <div className="card d-flex justify-content-center" style={{width: '18rem', border : 'none'}}>
                    <GiSpeedometer style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h2 style = {{color : 'black', fontWeight : 'bolder'}} class="card-title">36,00,00,000+</h2>
    <p class="card-text">Km Travelled (enough for 470 round trips to the moon!)</p>
  </div>
</div>
            <div className="card d-flex justify-content-center" style={{width: '18rem', border : 'none'}}>
                    <GiCarSeat style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h2 style = {{color : 'black', fontWeight : 'bolder'}} class="card-title">6,500+</h2>
    <p class="card-text">Number of Zoomcars</p>
  </div>
</div>
            <div className="card d-flex justify-content-center" style={{width: '18rem', border : 'none'}}>
                    <BsStarFill style = {{fontSize : '100px', marginLeft : '100px'}}/>
        <div class="card-body">
    <h2 style = {{color : 'black', fontWeight : 'bolder'}} class="card-title">Rating 4.7/5.0</h2>
    <p class="card-text">Rated by 3,00,000+ customers over 10,00,000+ bookings</p>
  </div>
</div>
</div>
        </div>
    )
}

export default Review
