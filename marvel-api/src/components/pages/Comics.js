import React from 'react';
import {Container, Row, Col} from "reactstrap";
export default class Comics extends React.Component {

    state = {
        loading: true,
        title: null
    };

    async componentDidMount() {
        const url = "http://gateway.marvel.com/v1/public/comics?&apikey=f0b6fb5f90e9139ed2f1514d0139fb" +
                "15&ts=1&hash=ccb8f319be84ea5586be53927142ff35";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({comics: data.results, loading: false});
    }

    render() {
        if (this.state.loading) {
            return <Container>
                <Row>loading...</Row>
            </Container>
        }

        if (!this.state.comics) {
            return <Container>
                <Row>Didn't get anything</Row>
            </Container>
        }

        return (
            <Container>
       
                    {this.state.comics.map(comics => (
                <Row>
                    <Col>{comics}</Col>
                    <Col>{comics}</Col>
                    <Col>{comics}</Col>
                    <Col>{comics}</Col>
       
                </Row>
            ))}
            </Container>
        );
    }
}