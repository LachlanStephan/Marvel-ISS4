import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, CardImg, CardText, CardTitle} from 'reactstrap';

    const FeaturedCard = ({searchVal}) => {

    const featuredURL = 'https://gateway.marvel.com/v1/public/series?title=';

    const API_KEY = process.env.REACT_APP_KEY;
        console.log(API_KEY);
    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        axios.get(featuredURL + searchVal + API_KEY)
        .then((respone) => {
            console.log(respone.data.data.results)
            setCharacterData(respone.data.data.results);
        })
    }, [searchVal]);
    

        return (
            <div className="contentContainer">
                    {characterData.map((featured, index) => (
                        <Card className="cardContainer" key={index}>
                            <CardImg src={`${featured.thumbnail.path}.${featured.thumbnail.extension}`}/>
                            <CardTitle>{featured.title}</CardTitle>
                            <CardText className="hide">{featured.startYear}</CardText>
                        </Card>
                    ))}
            </div>
        );
    }

export default FeaturedCard;