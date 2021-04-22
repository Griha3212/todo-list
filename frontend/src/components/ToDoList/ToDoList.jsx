/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import "./styles.css";
import { Button, Container, Row, Col, Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/actions/userAction";

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

  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  const { loading, error, users } = usersList;
  // useEffect(() => {

  // }, [dispatch]);

  const loadUserData = () => {
    dispatch(getUser());
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
            <Button onClick={loadUserData}>
              {loading ? (
                <Spinner
                  style={{ width: "1rem", height: "1rem" }}
                  type="grow"
                  color="light"
                />
              ) : null}
              {loading ? "Loading" : `Load user's data`}
            </Button>
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
