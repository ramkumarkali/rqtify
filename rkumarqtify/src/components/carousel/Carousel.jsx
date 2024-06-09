import React,{useEffect} from "react";
import { useSwiper,Swiper,SwiperSlide } from "swiper/react";

import Carouselleft from "./carouselleft/Carouselleft";
import CarouselRight from "./carouselright/Carouselright";

import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./Carousel.module.css";


import { Navigation } from "swiper/modules";

const Controls = ({data}) =>{
    let swiper = useSwiper();


    useEffect(()=>{
        swiper.slideTo(0,1)
    },[data])

    return <></>
}


const Carousel = ({data,renDerCardComponent}) =>{

    return(<div className={styles.wrapper}>
        <Swiper initialSlide={0}
        spaceBetween={40}
        slidesPerView={"auto"}
        modules={[Navigation]}
        allowTouchMove>
            <Controls data={data}/>
            <Carouselleft/>
            <CarouselRight/>

            {data.map((item,index) =>
            <SwiperSlide key={index}>{renDerCardComponent(item)}</SwiperSlide>
            )}
        </Swiper>
    </div>)
    
}


export default Carousel;