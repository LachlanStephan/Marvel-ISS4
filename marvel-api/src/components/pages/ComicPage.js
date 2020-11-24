import React from 'react';
import {Container, Row, Col} from "reactstrap";
import axios from 'axios';
import {Spinner} from 'reactstrap';
import {Card, CardImg, CardText, CardTitle} from 'reactstrap';

export default class Comics extends React.Component {

    state = {
        comic: null,
        loading: true,
        searchedValue: ''
    }

    componentDidMount() {
        axios
            .get('http://gateway.marvel.com/v1/public/comics?&apikey=f0b6fb5f90e9139ed2f1514d0139f' +
                'b15&ts=1&hash=ccb8f319be84ea5586be53927142ff35')
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
