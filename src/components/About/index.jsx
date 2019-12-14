import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const About = () => {

    return (
        <Container>
            <br />
            <Row className="show-grid">
                <Col sm={7}>
                    <div class="h2 text-center text-info">About</div>
                    <div class="shadow py-3 px-3">
                        <div class="text parbase section">

                            <h3>Plan, execute, and analyze. All in one system.</h3>
                            <p>By bringing planning, execution, and analysis together, Workday is designed to help you nimbly shift gears when you need to.</p>
                            <p>&nbsp;</p>

                        </div>
                        <div class="text parbase section">
                            <h3>Work with people who love their work.<br /></h3>
                            <p>We strive to create an environment that’s earned us the ranking of #4 on <i>Fortune</i> magazine's "100 Best Companies to Work For" list, and #1 on the "Best Large Workplaces in Ireland 2019” list by the Great Place to Work Institute. After all, happy employees create happy customers.<br /></p>
                        </div>
                    </div>
                </Col>
                <Col className="px-0" sm={5}>
                    <div class="text-center d-none d-none d-lg-block">
                        <br />
                        <img src={require(`../../static/images/logo_1.png`)} alt="my-work-logo" width="320" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About