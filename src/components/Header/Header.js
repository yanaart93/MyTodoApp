import React from "react";
import s from "./Header.module.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export const Header = () => {
  return (
    <Row>
      <Col>
        <div className={s.root}> My Todo List</div>
      </Col>
    </Row>
  );
};
