import {render} from '@testing-library/react';
import React from 'react';
import {Container, Row, Col} from 'reactstrap';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button }
// from 'reactstrap';
function Comics() {
    return <div className="comicsP">
        <h1>Comics page</h1>
    </div>;
}
export default Comics;

// class Comics extends React.Component {     state = {         isLoading: true,
//         comics: [],         error: null     }     render() { <React.Fragment
// > </React.Fragment>     } } render() {     const {isLoading, comics, error} =
// this.state;     return (         <React.Fragment>             <Container>
//             <Row>                     <Col>                         <Card>
//                          <CardImg/>                             <CardBody>
//                              <CardTitle></CardTitle>
//    </CardBody>                         </Card>                     </Col>
//             </Row>             </Container>         </React.Fragment>     );
// }
