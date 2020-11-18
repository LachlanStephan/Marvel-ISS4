import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import {Spinner} from 'reactstrap';

export default class Featured extends React.Component {
    state = {
        loading: true,
        featured: null
    };

    componentDidMount() {
        axios
            .get("http://gateway.marvel.com/v1/public/creators?ts=1&apikey=f0b6fb5f90e9139ed2f1514" +
                "d0139fb15&hash=ccb8f319be84ea5586be53927142ff35")
            .then((Response) => {
                console.log(Response)
                this.setState({featured: Response.data.data.results, loading: false})
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <Container>
                    <Row><Spinner color="primary"/></Row>
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
            <Container className="contentContainer">
                {this
                    .state
                    .featured
                    .map((card, index) => (
                        <Container className="comicContainer" key={index}>
                            <Row>
                                <Col>{card.firstName}</Col>
                            </Row>
                        </Container>
                    ))}
            </Container>
        );
    }
};
