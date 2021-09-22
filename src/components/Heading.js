import React from 'react'
import './styles/main.css'
import styled from 'styled-components'
import { AiOutlineRight } from 'react-icons/ai';


function Heading() {
    const Journey = styled.button`
    width: 40%;
    padding:15px;
    border-radius:5px;
    border : none;
    text-align : left;
    position: sticky;
    position: -webkit-sticky;
`

    return (
        <div className = 'heading'>
        <h1>DRIVE IN A SANITISED ZOOMCAR</h1>
        <p>Self Drive Car Rental in Pune</p>
        <Journey style = {{position: 'sticky'}}>Start Your Wonderful Journey<AiOutlineRight style = {{marginLeft : '58%'}}/></Journey>
        </div>
    )
}

export default Heading
