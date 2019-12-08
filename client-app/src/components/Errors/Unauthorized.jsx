import React from 'react';
import './style.css';
import { Container, } from 'react-bootstrap';

const Unauthorized = ({ match }) => {

  return (
    <Container>
      <img id="sadFaceImg" className="imgUnauthorized"
        src="https://imageog.flaticon.com/icons/png/512/42/42901.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
        alt="sad face" />
      <div className="text-center mt-3">
        <h1>HTTP error 401</h1>
        <h2>Unauthorized</h2>
      </div>
    </Container>
  )
}

export default Unauthorized