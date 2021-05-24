import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Characters = () => {

    const [data, setData] = useState([]);

    const getCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        // const newCharacters = data.results
        setData(data.results);
      };
    
      useEffect(() => {
        getCharacters();
      }, []);

    // useEffect(() =>{
    //     fetch("https://rickandmortyapi.com/api/character")
    //     .then(response => response.json())
    //     .then(data => setCharacters(data.results));
    // }, []);
    if(data.length === 0) return (null)

    return (
        <div className="Characters">
            {data.map((character, index) => (
                <Card character={character} color="red" />
            ))}
        </div>
    );
}

export default Characters;