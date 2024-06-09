import React,{useEffect,useState} from "react";
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";
import {useSwiper,Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from "./Carouselleft.module.css";


const Carouselleft = () =>{
    let swiper = useSwiper();

    const [isBeginning,setIsbeginning] = useState(swiper.isBeginning);


    useEffect(()=>{
        swiper.on('slideChange',()=>{
            setIsbeginning(swiper.isBeginning)
        })
    },[swiper]);

    return(
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
        </div>
    )
}


export default Carouselleft;