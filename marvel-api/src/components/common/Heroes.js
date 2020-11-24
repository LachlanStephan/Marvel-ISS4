import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card, CardImg, CardText, CardTitle} from 'reactstrap';

    const CharacterCard = ({searchVal}) => {

        const charURL = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=';

        const API_KEY = process.env.REACT_APP_API_KEY;

        const [characterData, setCharacterData] = useState([]);

        useEffect(() => {
            axios.get(charURL + searchVal + API_KEY)
            .then((response) => {
                console.log(response.data.data.results)
                setCharacterData(response.data.data.results);
            })
        },[searchVal])

       return (
            <div className="contentContainer">
                {characterData.map((card, index) => (
                        <Card className="cardContainer" key={index}>
                            <CardImg src={`${card.thumbnail.path}.${card.thumbnail.extension}`}/>
                            <CardTitle>{card.name}</CardTitle>
                            <CardText className="hide">{card.description}</CardText>
                        </Card>
                    ))}
            </div>
        );

    
}

export default CharacterCard;




