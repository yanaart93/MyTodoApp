import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import s from "./AddTodo.module.css";

export const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");
  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: 4,
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }
  return (
    <Row>
      <Col className={s.addTodoForm}>
        <Form.Control
          placeholder="Добавьте задачу "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={saveTodo} className={s.btn} variant="info" size="lg">
          Добавить
        </Button>
      </Col>
    </Row>
  );
};
