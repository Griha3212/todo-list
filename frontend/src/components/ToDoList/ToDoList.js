import React, { useState, useCallback } from 'react';
import "./styles.css";
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export const ToDoList = () => {

    const [listItems, setListItems] = useState(['1', '2']);


    const addNewListItem = () => {
        setListItems([...listItems, listItems.length + 1])
    }


    const deleteFirstListItem = () => {

        listItems.shift();

        // const newArray = 

        console.log('listItems :>> ', listItems);

        setListItems([...listItems])


    }

    const deleteCurrentListItem = (index) => {
        // console.log('object :>> ');
        // e.preventDefault();
        // e.preventDefault();
        listItems.splice(index, 1);

        setListItems([...listItems]);
    }



    return (


        <>
            <Container>
                <Row>
                    <Col xs={12} xl={2}>
                        {listItems.map((element, index) => {
                            return (

                                <Row key={index}>
                                    <Col>
                                        <p
                                            key={index}
                                            style={{ border: '1px solid red' }
                                            }>
                                            {element}
                                        </p>
                                    </Col>
                                    <Col>
                                        <p onClick={() => deleteCurrentListItem(index)} key={index}>
                                            x
                                        </p>
                                    </Col>
                                </Row>


                            )

                        })}
                    </Col>

                    <Col>  <Button onClick={addNewListItem}>Add new element</Button></Col>
                    <Col>  <Button onClick={deleteFirstListItem}>Delete first element</Button></Col>

                    <Col>  <Button>Hi</Button></Col>

                </Row>


            </Container>
        </>

    )
}