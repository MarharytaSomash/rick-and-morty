import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./stylesDetails.scss";

function Details() {
    const [character, setCharacter] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCharacter = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                setCharacter(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getCharacter();
    }, [id]);
    const handleGoBack = () => navigate(-1);

    return (
        <div className="cards-character-details">
            <div className="wrapper-button-arrow-back">
                <img src={process.env.PUBLIC_URL + "/img/arrow_back.png"} alt="arrow_back" />
                <button onClick={handleGoBack}> GO BACK</button>
            </div>

            {character && (
                <section key={character.id} className="character-details">
                    <img src={character.image} alt={character.name} />
                    <h1>{character.name}</h1>
                    <h2>Information</h2>

                    <div className="character-details-main-wrapper">
                        <div className="character-details-main">
                            <h3>Gender</h3>
                            <p>{character.gender}</p>
                        </div>
                        <div className="character-details-main">
                            <h3>Status</h3>
                            <p>{character.status}</p>
                        </div>
                        <div className="character-details-main">
                            <h3>Specie</h3>
                            <p>{character.species}</p>
                        </div>
                        <div className="character-details-main">
                            <h3>Origin</h3>
                            <p>{character.origin.name}</p>
                        </div>
                        <div className="character-details-main">
                            <h3>Type</h3>
                            <p>{character.type}</p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default Details;
