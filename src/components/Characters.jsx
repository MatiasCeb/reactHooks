import React, { useState, useEffect, useReducer, useMemo } from "react";
import Card from "../components/Card";

const initialState = {
    favorites: []
}

const favoriteReducer = (state,action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    }
}

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState("");

    const getCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const characters = await response.json();
        // const newCharacters = data.results
        setCharacters(characters.results);
      };
    
      useEffect(() => {
        getCharacters();
      }, []);

    // useEffect(() =>{
    //     fetch("https://rickandmortyapi.com/api/character")
    //     .then(response => response.json())
    //     .then(data => setCharacters(data.results));
    // }, []);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', 
        payload: favorite })
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    // const filteredUsers = characters.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    )

    // if(characters.length === 0) return (null)

    return (
        <div className="Characters">

            {favorites.favorites.map(favorite =>(
                <li key={favorite.id}>
                    {favorite.name}
                </li>
            ))}

            <div className="Search">
                <input type="text" value={search} onChange={handleSearch}/>
            </div>

            {filteredUsers.map(character => (
                <div className="item" key={character.id}>
                    <Card character={character} />
                    <button type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>
                </div>
            ))}
        </div>
    );
}

export default Characters;