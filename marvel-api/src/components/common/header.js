import {Container, Row, Col} from 'reactstrap';
import React from 'react';

function Header() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Marvel</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className="input" type="text"></input>
                    <button>
                        <strong>search</strong>
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;