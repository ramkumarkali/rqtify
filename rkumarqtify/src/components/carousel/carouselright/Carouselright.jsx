import React,{useEffect,useState} from "react";
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";
import { useSwiper,Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import styles from "./Carouselright.module.css";


const CarouselRight = () =>{
    let swiper = useSwiper();

    const[isEnd ,setisEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange",()=>{
            setisEnd(swiper.isEnd);
        })
    },[swiper]);

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
        </div>
    )
}

export default CarouselRight;