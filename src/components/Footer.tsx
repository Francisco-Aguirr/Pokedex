import React from 'react'
import { Link } from 'react-router-dom'
import pokemonsPic from "../assets/pikachu.png";
import location from "../assets/pointer.png";
import itemsPic from "../assets/pokeball.png";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Link className={styles.footerLink} to="/pokemons">
            <img className={styles.footerIcon} src={pokemonsPic} alt="" /> 
            pokemons
        </Link>
        <Link className={styles.footerLink} to="/items">
            <img className={styles.footerIcon} src={itemsPic} alt="" />
            Items
        </Link>
        <Link className={styles.footerLink} to="/map">
            <img className={styles.footerIcon} src={location} alt="" />
            Map
        </Link>
    </footer>
  )
}

export default Footer