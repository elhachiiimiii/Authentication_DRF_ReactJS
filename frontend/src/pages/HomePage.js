import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomePage = () => {
    let [notes, setNotes] = useState([]);
    let { authTokens, logoutUser } = useContext(AuthContext);

    useEffect(() => {
        getNotes();
    }, []);

    let getNotes = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/notes/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access),
            },
        });
        let data = await response.json();

        if (response.status === 200) {
            setNotes(data);
        } else if (response.statusText === 'Unauthorized') {
            logoutUser();
        }
    };

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h1>Welcome to Your Notes Dashboard</h1>
                    <p className="lead">Here you can view and manage all your notes.</p>
                    <Link to="#" onClick={logoutUser} className="btn btn-danger">
                        Logout
                    </Link>
                </Col>
            </Row>

            <Row>
                {notes.map((note) => (
                    <Col md={4} key={note.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Note {note.id}</Card.Title>
                                <Card.Text>{note.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomePage;
