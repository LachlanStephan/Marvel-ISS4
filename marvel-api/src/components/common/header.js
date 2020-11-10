import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Header() {
  return (
    <Container>
      <Row>
       <Col> 
        <div className="headerWrapper">
          <h1>Marvel</h1>
          <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
            aria-label="Search" />
          </form>
        </div>
      </Col>
    </Row>
   </Container>
  )
};

export default Header;