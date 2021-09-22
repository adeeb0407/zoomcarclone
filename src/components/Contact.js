import React from 'react'
import socials from './images/socials.png'


function Contact() {
    return (
        <div className = 'contact' style = {{textAlign : 'left', padding : '10% 0 8% 10%'}}>
            <h1>ZOOM ON THE GO!</h1>
            <h3>Make a booking, unlock your car, and end your reservation all from our app</h3>
            <br />
            <br />
            <a href = '#'><img src = {socials} style = {{color : 'black'}} width = '130px' /></a>
        </div>

    )
}

export default Contact
