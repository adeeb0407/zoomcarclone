import React from 'react'
import brand1 from './images/brand1.jpg'
import brand2 from './images/brand2.jpg'
import brand3 from './images/brand3.jpg'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'

function Brands() {
    return (
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={brand1} class="d-block w-70" alt="..." style = {{marginLeft: '25%'}} />
    </div>
    <div class="carousel-item">
      <img src={brand2} class="d-block w-70" alt="..." style = {{marginLeft: '25%'}}/>
    </div>
    <div class="carousel-item" >
      <img src={brand3} class="d-block w-70" alt="..." style = {{marginLeft: '25%'}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span  class="carousel-control-prev-icon" aria-hidden="true"><AiOutlineLeft className = 'dark'/></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button style = {{color : 'Black'}} class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"><AiOutlineRight className = 'dark'/></span>
    <span class="visually-hidden dark"><AiOutlineRight className = 'dark' style = {{color : 'black'}}/></span>
  </button>
</div>
    )
}

export default Brands
