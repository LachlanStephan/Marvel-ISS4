import {Container, Row, Col} from 'reactstrap';
import React from 'react';
import SearchHeroes from '../searchSeries';

export default class Header extends React.Component {

    render() {
        return (
            <Container className="headerWrapper">
                <h1>Marvel Search</h1>
                <SearchHeroes/>
            </Container>

        )
    }

}
