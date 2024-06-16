import React,{useEffect} from "react";
import styles from "./Filtersection.module.css";
import Section from "../Section/Section";
import Basictabs from "../basictabs/Basictabs";
import Carousel from "../carousel/Carousel";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
// import { type } from "@testing-library/user-event/dist/type";


const Filtersection=({type,title,value,filteredData,handleChangeIndex})=>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h3>{title}</h3>
            </div>
            <Basictabs handleChangeIndex={handleChangeIndex}/>
            {filteredData.length?(
                <div className={styles.cardsWrapper}>
                    <Carousel data ={filteredData} renDerCardComponent={(filteredData)=><Card data={filteredData} type={type}/>}/>
                </div>
            ):(
                <div className={styles.progressBar}>
                    <CircularProgress/>

                </div>
            )}
        </div>
    )
}



export default Filtersection;