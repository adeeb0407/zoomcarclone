import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FaBloggerB } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'


function About() {

    const iconStyle = {marginRight : '25px', backgroundColor : 'white', padding : '5px', borderRadius : '50%', color : '#334355', fontSize : '30px'}

    return (
        <div className = 'about'>
        <p>About Us</p>
        <div className = 'mainSection'>
        <div className = 'section'>
            <ul>
                <li><a href = '#'>Zoomcar Team</a></li>
                <li><a href = '#'>Locations & Cars</a></li>
            </ul>
            </div>
        <div className = 'section'>
            <ul>
                <li><a href = '#'>Zoomcar Subscription</a></li>
                <li><a href = '#'>Self Drive Cars</a></li>
            </ul>
            </div>
        <div className = 'section'>
            <ul>
                <li><a href = '#'>Zoomcar Blog</a></li>
                <li><a href = '#'>Invest via OurCrowd</a></li>
            </ul>
            </div>
        <div className = 'section'>
            <ul>
                <li><a href = '#'>Careers @ Zoomcar</a></li>
            </ul>
            </div>
        </div>


        <p>Cities</p>
        <div className = 'mainSection'>
        <div className = 'section'>
            <ul>
                <li><a href = '#'>Self drive cars in Bangalore</a></li>
                <li><a href = '#'>Self drive cars in Chennai</a></li>
                <li><a href = '#'>Self drive cars in Ahmedabad</a></li>
                <li><a href = '#'>Self drive cars in Luhiana</a></li>
                <li><a href = '#'>Self drive cars in Nagpur</a></li>
                <li><a href = '#'>Self drive cars in Surat</a></li>
                <li><a href = '#'>Self drive cars in Bhubaneswar</a></li>
            </ul>
            </div>
        <div className = 'section'>
            <ul>
                <li><a href = '#'>Self drive cars in in Pune </a></li>
                <li><a href = '#'>Self drive cars in in Hyderabad </a></li>
                <li><a href = '#'>Self drive cars in in coimbatore </a></li>
                <li><a href = '#'>Self drive cars in in mangalore-manipur </a></li>
                <li><a href = '#'>Self drive cars in in Kochi </a></li>
                <li><a href = '#'>Self drive cars in in Siligiri </a></li>
                <li><a href = '#'>Self drive cars in in Hassan </a></li>
            </ul>
            </div>
        <div className = 'section'>
            <ul>
            <li><a href = '#'>Self drive cars in in Pune </a></li>
            <li><a href = '#'>Self drive cars in in Chandigard </a></li>
            <li><a href = '#'>Self drive cars in in Indore </a></li>
            <li><a href = '#'>Self drive cars in in Mysore </a></li>
            <li><a href = '#'>Self drive cars in in Udaipur </a></li>
            <li><a href = '#'>Self drive cars in in Lucknow </a></li>
            <li><a href = '#'>Self drive cars in in Vadorar </a></li>
            </ul>
            </div>
        <div className = 'section'>
            <ul>
            <li><a href = '#'>Self drive cars in in Mumbai </a></li>
            <li><a href = '#'>Self drive cars in in Kolkata </a></li>
            <li><a href = '#'>Self drive cars in in Jaipur </a></li>
            <li><a href = '#'>Self drive cars in in Vizgad </a></li>
            <li><a href = '#'>Self drive cars in in Vijayawada</a></li>
            <li><a href = '#'>Self drive cars in in Guwahati </a></li>
            <li><a href = '#'>Self drive cars in in Trivandrum </a></li>
            </ul>
            </div>
        </div>

        <p>Airport Services</p>
        <div className = 'mainSection'>
        <div className = 'section'>
            <ul>
                <li><a href = '#'>Car rental from Bangalore Airport</a></li>
                <li><a href = '#'>Car rental from Chennai Airport</a></li>
                <li><a href = '#'>Car rental from Ahmedabad Airport</a></li>
                <li><a href = '#'>Car rental from Vizgad Airport</a></li>
                <li><a href = '#'>Car rental from Guwahati Airport</a></li>
            </ul>
            </div>
        <div className = 'section'>
            <ul>
            <li><a href = '#'>Car rental from Pune Airport</a></li>
            <li><a href = '#'>Car rental from Hyderabad Airport</a></li>
            <li><a href = '#'>Car rental from Coimbatore Airport</a></li>
            <li><a href = '#'>Car rental from Udaipur Airport</a></li>
            </ul>
            </div>
        <div className = 'section'>
            <ul>
            <li><a href = '#'>Car rental from Delhi Airport</a></li>
            <li><a href = '#'>Car rental from Chandigard Airport</a></li>
            <li><a href = '#'>Car rental from Indore Airport</a></li>
            <li><a href = '#'>Car rental from Surat Airport</a></li>
            </ul>
            </div>
        <div className = 'section'>
            <ul>
            <li><a href = '#'>Car rental from Mumbai Airport</a></li>
            <li><a href = '#'>Car rental from Kolkata Airport</a></li>
            <li><a href = '#'>Car rental from Jaipur Airport</a></li>
            <li><a href = '#'>Car rental from Lucknow Airport</a></li>
            </ul>
            </div>
        </div>
        <hr />
        <div className = 'socialMedia'>
        <h4>Let's Keep in Touch</h4>
        <br />
        <p>7th Floor, Tower-B, Diamond District, 150, HAL Airport Road, Kodihalli, Bangalore – 560008</p>
        <div className = 'socalIcons'>
            <FaFacebookF style = {iconStyle}/>
            <AiOutlineTwitter style = {iconStyle} />
            <AiOutlineInstagram style = {iconStyle} />
            <AiFillYoutube style = {iconStyle}/>
            <FaBloggerB style = {iconStyle} />
            <AiFillLinkedin style = {iconStyle} />
        </div>
        <br/>
        <small>© Copyright 2017 Zoomcar India Private Ltd. All rights reserved.</small>
        </div>
        </div>
    )
}

export default About
