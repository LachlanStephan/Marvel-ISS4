import React from 'react';
import {Container, Row, Col} from "reactstrap";
import axios from 'axios';
import {Spinner} from 'reactstrap';
import {Card, CardImg, CardText, CardTitle} from 'reactstrap';

  const API_KEY = process.env.REACT_APP_API_KEY;

  const comicURL = 'https://gateway.marvel.com/v1/public/comics?';


export default class Comics extends React.Component {

    state = {
        comic: null,
        loading: true,
        searchedValue: ''
    }

  


    componentDidMount() {
        axios
            .get(comicURL + API_KEY)
            .then((Response) => {
                console.log(Response)
                this.setState({comic: Response.data.data.results, loading: false})
            })
    };


    render() {
        if (this.state.loading) {
            return (
                <Container>
                    <Row>
                        <Col className="spinner"><Spinner color="primary"/></Col>
                    </Row>
                </Container>
            )
        }

        if (!this.state.comic) {
            return (
                <Container>
                    <Row>Nothing to show</Row>
                </Container>
            )
        }
      

        return (

            <div className="contentContainer">
                     {this
                    .state
                    .comic
                    .map

                    ((card, index) => (
                        <Card className="cardContainer" key={index}>
                            <CardImg src={`${card.thumbnail.path}.${card.thumbnail.extension}`}/>
                            <CardTitle>{card.title}</CardTitle>
                            <CardText className="hide">{card.description}</CardText>
                        </Card>

                    ))}
            </div>
        );
    }

};
