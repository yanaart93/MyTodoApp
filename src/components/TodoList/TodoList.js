import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import s from "./TodoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faTrash,
  faEdit,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";

export const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState(todo);

  useEffect(() => {
    setFiltered(todo);
  }, [todo]);

  function todoFilter(status) {
    if (status === "all") {
      setFiltered(todo);
    } else {
      let newTodo = [...todo].filter((item) => item.status === status);
      setFiltered(newTodo);
    }
  }

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }
  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }
  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }
  return (
    <div>
      <Row>
        <Col className={s.filter}>
          <ButtonGroup aria-label="Basic example" className={s.btns}>
            <Button variant="secondary" onClick={() => todoFilter("all")}>
              Все
            </Button>
            <Button variant="secondary" onClick={() => todoFilter(true)}>
              Открытые
            </Button>
            <Button variant="secondary" onClick={() => todoFilter(false)}>
              Закрытые
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      {filtered.map((item) => (
        <div key={item.id} className={s.listItems}>
          {edit === item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div className={!item.status ? s.close : ""}>{item.title}</div>
          )}
          {edit === item.id ? (
            <div>
              <Button
                onClick={() => saveTodo(item.id)}
                variant="info"
                size="sm"
              >
                <FontAwesomeIcon icon={faSave} />
              </Button>
            </div>
          ) : (
            <div>
              <Button
                onClick={() => deleteTodo(item.id)}
                variant="info"
                size="sm"
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button
                onClick={() => editTodo(item.id, item.title)}
                variant="info"
                size="sm"
                className={s.btn}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button
                onClick={() => statusTodo(item.id)}
                variant="info"
                size="sm"
                className={s.btn}
              >
                {item.status ? (
                  <FontAwesomeIcon icon={faLockOpen} />
                ) : (
                  <FontAwesomeIcon icon={faLock} />
                )}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
