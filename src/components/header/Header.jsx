import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import logo from "../../assets/logo.png";
import home from "../../assets/home.svg";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const [show, setShow] = useState(false);

  const logIn = () => {
    setShow(true);
  };

  const logInHide = () => {
    setShow(false);
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <img className="header-img" src={logo} alt="#!" />
        <a href="/" className="header-ref">
          <img className="header-home" src={home} alt="#!" />
        </a>
      </div>

      <div>
        <div className="header-button-box">
          <button className="header-button" onClick={logIn}>
            Log In
          </button>
          <button className="header-button">
            <Link to="/signUp" className="header-link">
              <div>Sign Up</div>
            </Link>
          </button>
        </div>

        <Modal show={show} onHide={logInHide}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="fromBasicEmail">
                <Form.Label>login</Form.Label>
                <Form.Control type="login" placeholder="login" />
              </Form.Group>
              <Form.Group controlId="fromBasicPassword">
                <Form.Label>password</Form.Label>
                <Form.Control type="password" placeholder="password" />
              </Form.Group>
              <Form.Group controlId="fromBasicCheckbox">
                <Form.Check type="checkbox" label="remember me" />
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </header>
  );
};

export default Header;
