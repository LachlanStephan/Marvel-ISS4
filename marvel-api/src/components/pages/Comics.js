import React from 'react';
import {Container, Row, Col} from "reactstrap";
export default class Comics extends React.Component {

    state = {
        loading: true,
        title: null
    };

    async componentDidMount() {
        const url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=f0b6fb5f90e9139ed2f1514d0" +
                "139fb15&hash=ccb8f319be84ea5586be53927142ff35";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ thumbnail: data.results, loading: false });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {this.state.loading || !this.state.thumbnail
                            ? (
                                <Col>Loading...</Col>
                            )
                            : (
                                <Col>this.state.data.results.thumbnail</Col>
                            )}
                    </Col>
                </Row>
            </Container>
        )
    }
};
