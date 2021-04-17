import React, { useState } from "react";
import "./styles.css";
import { Button, Container, Row, Col } from "reactstrap";

export const ToDoList = () => {
  const [listItems, setListItems] = useState(["1", "2"]);

  const addNewListItem = () => {
    setListItems([...listItems, listItems.length + 1]);
  };

  const deleteFirstListItem = () => {
    listItems.shift();

    console.log("listItems :>> ", listItems);

    setListItems([...listItems]);
  };

  const deleteCurrentListItem = (index) => {
    listItems.splice(index, 1);

    setListItems([...listItems]);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} xl={2}>
            {listItems.map((element, index) => (
              <Row key={index}>
                <Col>
                  <p key={index} style={{ border: "1px solid red" }}>
                    {element}
                  </p>
                </Col>
                <Col>
                  <p onClick={() => deleteCurrentListItem(index)} key={index}>
                    x
                  </p>
                </Col>
              </Row>
            ))}
          </Col>

          <Col>
            {" "}
            <Button onClick={addNewListItem}>Add new element</Button>
          </Col>
          <Col>
            {" "}
            <Button onClick={deleteFirstListItem}>Delete first element</Button>
          </Col>

          <Col>
            {" "}
            <Button>Hi</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
