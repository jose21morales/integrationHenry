import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail() {
    const { id } = useParams();
    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
            } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        
        return setCharacter({});
     }, [id]);
    
    return (
        <div>
          <div>
                {character.name && <h3>{character.name}</h3>}
                {character.status && <h3>STATUS | {character.status}</h3>}
                {character.gender && <h3>GENDER | {character.gender}</h3>}
                {character.species && <h3>SPECIE | {character.species}</h3>}
                {character.origin && (
                    <h3>ORIGIN | {character.origin.name}</h3>
                )}
                {character.image && (
                    <div>
                        <img src={character.image} alt='' />
                    </div>
                )}
            </div>
        </div>
    );
}