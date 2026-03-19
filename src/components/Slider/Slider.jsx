import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import legoClassic from "../../assets/legoClassic.png"
import hotBike from "../../assets/hot bike.png"
import house from "../../assets/house.png"
import gun from "../../assets/gun.png"
import train from "../../assets/train.png"

const Slider = () => {
  return (
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={legoClassic} alt="" style={{width:"100%" ,height:"500px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hotBike} alt="" style={{width:"100%" ,height:"500px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={house} alt="" style={{width:"100%" ,height:"500px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gun} alt="" style={{width:"100%" ,height:"500px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={train} alt="" style={{width:"100%" ,height:"500px" }} />
      </SwiperSlide>


    </Swiper>

    //        <div className="carousel w-full">
    //   <div id="slide1" className="carousel-item relative w-full">
    //     <img
    //       src="https://i.ibb.co.com/sdNKjJ48/dbb66e5b04969bcd04e98fd6173d11ea.jpg"
    //       className="w-full h-[350px] " />
    //     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //       <a href="#slide4" className="btn btn-circle">❮</a>
    //       <a href="#slide2" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    //   <div id="slide2" className="carousel-item relative w-full">
    //     <img 
    //       src="https://i.ibb.co.com/zTm2fH0m/8161-ILHs-Pf-L-AC-SX300-SY300-QL70-FMwebp.webp"
    //       className="w-full h-[350px]" />
    //     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //       <a href="#slide1" className="btn btn-circle">❮</a>
    //       <a href="#slide3" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    //   <div id="slide3" className="carousel-item relative w-full">
    //     <img
    //       src="https://i.ibb.co.com/bR1m5zYD/81-K-Im-FFH1-L-AC-SX679.jpg"
    //       className="w-full h-[350px]" />
    //     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //       <a href="#slide2" className="btn btn-circle">❮</a>
    //       <a href="#slide4" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    //   <div id="slide4" className="carousel-item relative w-full">
    //     <img
    //       src="https://i.ibb.co.com/hp5nfWz/a23351fc9389cf168ed2af358b2b7d5b.jpg"
    //       className="w-full h-[350px]" />
    //     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //       <a href="#slide3" className="btn btn-circle">❮</a>
    //       <a href="#slide1" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    // </div>


  );
};

export default Slider;