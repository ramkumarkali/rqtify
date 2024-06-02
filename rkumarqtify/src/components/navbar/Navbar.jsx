import React from "react";
import styles from "./Navabar.module.css";
import Logo from "../Logo/Logo";
import Search from "../search/Search";
import Button from "../Button/Button";


const Navbar = ()=>{
    return(
        <>
            <nav className={styles.navbar}>
                <Logo />
                <Search search={"Search a song of your choice"} />
                <Button children={"Give Feedback"} />
            </nav>
        </>
    )
}

export default Navbar;