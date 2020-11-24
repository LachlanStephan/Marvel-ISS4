import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, CardImg, CardText, CardTitle} from 'reactstrap';

    const FeaturedCard = ({searchVal}) => {

    const featuredURL = 'https://gateway.marvel.com/v1/public/series?title=';

    const creds = '&ts=1&apikey=f0b6fb5f90e9139ed2f1514d0139fb15&hash=ccb8f319be84ea5586be53927142ff35';

    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        axios.get(featuredURL + searchVal + creds)
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