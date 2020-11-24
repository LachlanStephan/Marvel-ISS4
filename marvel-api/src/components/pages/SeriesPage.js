import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import {Spinner} from 'reactstrap';
import {Card, CardImg, CardText, CardTitle} from 'reactstrap';

const API_KEY = process.env.REACT_APP_API_KEY;

const seriesURL = 'http://gateway.marvel.com/v1/public/series?';


export default class Featured extends React.Component {

    state = {
        loading: true,
        featured: null
    };

    componentDidMount() {
        axios
            .get(seriesURL + API_KEY)
            .then((Response) => {
                console.log(Response)
                this.setState({featured: Response.data.data.results, loading: false})
            })
    }

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

        if (!this.state.featured) {
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
                    .featured
                    .map((card, index) => (
                        <Card className="cardContainer" key={index}>
                            <CardImg src={`${card.thumbnail.path}.${card.thumbnail.extension}`}/>
                            <CardTitle>{card.title}</CardTitle>
                            <CardText className="hide">{card.startYear}</CardText>
                        </Card>
                    ))}
            </div>
        );
    }
};