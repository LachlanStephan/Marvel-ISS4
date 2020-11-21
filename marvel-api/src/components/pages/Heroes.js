import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import {Spinner} from 'reactstrap';
import {Card, CardImg, CardText, CardTitle} from 'reactstrap';

export default class Heroes extends React.Component {

    state = {
        loading: true,
        heroes: null
    }

    componentDidMount() {
        axios
            .get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f0b6fb5f90e9139ed2f15" +
                "14d0139fb15&hash=ccb8f319be84ea5586be53927142ff35")
            .then((Response) => {
                console.log(Response)
                this.setState({heroes: Response.data.data.results, loading: false})
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

        if (!this.state.heroes) {
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
                    .heroes
                    .map((card, index) => (
                        <Card className="cardContainer" key={index}>
                            <CardImg src={`${card.thumbnail.path}.${card.thumbnail.extension}`}/>
                            <CardTitle>{card.name}</CardTitle>
                            <CardText className="hide">{card.description}</CardText>
                        </Card>
                    ))}
            </div>
        );
    }
};
