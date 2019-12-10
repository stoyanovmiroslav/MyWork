import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FaCheck } from "react-icons/fa";


const WhyMyWork = () => {

    return (
        <Container>
            <br />
            <div className="h2 text-center text-info">Why MyWork</div>
            <Row className="show-grid shadow mr-3 pt-3">
                <Col sm={6}>
                    <div>
                        <h3><FaCheck style={{ marginBottom: '3px' }} /> Plan, execute, and analyze. All in one system.</h3>
                        <p>By bringing planning, execution, and analysis together, Workday is designed to help you nimbly shift gears when you need to.</p>
                        <p>&nbsp;</p>
                    </div>
                    <div>
                        <h3><FaCheck style={{ marginBottom: '3px' }} /> Work with people who love their work.<br /></h3>
                        <p>We strive to create an environment that’s earned us the ranking of #4 on <i>Fortune</i> magazine's "100 Best Companies to Work For" list, and #1 on the "Best Large Workplaces in Ireland 2019” list by the Great Place to Work Institute. After all, happy employees create happy customers.<br /></p>
                    </div>
                </Col>
                <Col className="px-0" sm={6}>
                    <div>
                        <h3><FaCheck style={{ marginBottom: '3px' }} /> See the full picture.<br /></h3>
                        <p>With a <b>single system for finance, HR, and planning</b>, Workday gives you total visibility so you can make decisions based on data, not guesswork.</p>
                        <p>&nbsp;</p>
                    </div>
                    <div>
                        <h3><FaCheck style={{ marginBottom: '3px' }} /> Engage your people.</h3>
                        <p>Our intuitive experience across mobile, tablet, and desktop ensures widespread adoption. Your employees can access the insight they need, when they need it.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default WhyMyWork