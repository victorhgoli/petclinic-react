import React, { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { Button, Form, ListGroup, Row, Col, Container } from "react-bootstrap";

// import { Container } from './styles';

function Pet() {
    const [pets, setPets] = useState([]);

    const [petName, setPetName] = useState("");


    useEffect(() => {
        axios.get(`http://localhost:8080/pet`)
            .then(res => {
                setPets(res.data);
            })
    }, [])


    function addPet(){
        axios.put(`http://localhost:8080/pet`, { name: 'doguinho' })
            .then(res => {
                alert('adioconado')
            })
    }

   function deletePet(petID){
        axios.delete(`http://localhost:8080/pet?id=`+petID)
            .then(res => {
                alert('Removido')
            })
    }

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Nome do Pet</Form.Label>
                    <Form.Control type="text" placeholder="Nome do Pet" value={petName} onChange={(e) => setPetName(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => { addPet() }}>
                    Submit
                </Button>
            </Form>

            <ListGroup>
                {pets.map((pet, index) =>
                    <Row>
                        <Col>
                            <ListGroup.Item key={index}>{pet.name}</ListGroup.Item>
                        </Col>
                        <Col xs={1}>
                            <Button variant="primary" type="submit" onClick={(e) => {} }>Editar</Button>
                        </Col>
                        <Col xs={1}>
                            <Button variant="primary" type="submit" onClick={(e) => deletePet(pet.id) }>Excluir</Button>
                        </Col>
                    </Row>
                )}
            </ListGroup>
        </div>
    );
}

export default Pet;