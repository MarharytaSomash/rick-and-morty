import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./styleData.scss";
function GetData() {
    const [characters, setCharacters] = useState([]);
    // const [searchHistory, setSearchHistory] = useLocalStorage("searchHistory", []);

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/character/");

                setCharacters(response.data.results.sort((a, b) => a.name.localeCompare(b.name)));
            } catch (error) {
                console.error(error);
            }
        };
        getCharacters();
    }, []);

    // const handleSearch = (event) => {
    //     event.preventDefault();
    //     setSearchHistory([...searchHistory, searchTerm]);
    // };
    return (
        <div className="cards-character">
            {characters.map((character) => (
                <section key={character.id} className="cards-character-about">
                    <img src={character.image} alt={character.name} />
                    <div>
                        <h2>{character.name}</h2>
                        <p>{character.species}</p>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default GetData;
