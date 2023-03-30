import React, { useEffect, useState } from 'react';
import pokebalImg from '../assets/pokeball.png';
import bulbasaur from '../assets/bulbasaur.gif';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './pokemon.module.css';
import { PokemonDetails } from '../types/type';
import { fetchPokemon } from '../api/fetchPokemon';
import { waitFor } from '../utils/Utils';
import LoadingScreen from '../components/LoadingScreen';

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const {name} = useParams();
  const navigate = useNavigate();

  useEffect(() =>{
    async function getPokemon(){
      setIsLoading(true);
      await waitFor(300);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }
    getPokemon();
  },[name]);

  if(isLoading || !pokemon) return <LoadingScreen/>;
   
  return ( 
    <>
      <button className={styles.pokeBallButtom} onClick={()=> navigate(-1)}>
        <img className={styles.pokeballImg} src={pokebalImg} alt="Pokeball" /> Go back
      </button>
      <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
          <div className={styles.pokemonTitle}>
            {pokemon?.name?.toUpperCase()}
          </div>
          <div>Número {pokemon?.id}</div>
          <div>
            <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt="bulbasaur" />
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defensa: {pokemon?.defense}</div>
        </main>
      </div>
      <Footer/>
    </>)
   
}

export default Pokemon