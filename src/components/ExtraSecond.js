import React from 'react'
import { FaFileInvoiceDollar } from 'react-icons/fa'

function ExtraSecond() {
    return (
        <div className = 'extraSecond'>
            <div className = 'small-card' style = {{marginTop: '-80px'}}>
            <FaFileInvoiceDollar style = {{fontSize : '100px', color : '#50C526'}}/>
            <br />
            <h4>EARN Z POINTS</h4>
            </div>

            <p>Earn Z-Points for every booking and redeem for additional discount</p>
            <button className = 'learn'>LEARN MORE</button>
            <br />
            <br />
            <br />
        </div>
    )
}

export default ExtraSecond
