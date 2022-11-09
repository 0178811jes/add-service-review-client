import React from 'react';
import img1 from '../../../assest/pic1.webp'
import img2 from '../../../assest/pic2.jfif'
import img3 from '../../../assest/pic3.png'
import img4 from '../../../assest/pic4.jfif'





const sliderItem = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 1
  },
]




const Slider = () => {
  
  return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img src={img1} alt="" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img src={img2} alt="" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img src={img3} alt="" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <img src={img4} alt="" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
    

  );
};

export default Slider;