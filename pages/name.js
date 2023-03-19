import React from "react";
import { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

import { NameContext } from '../components/context/nameContext'

export default function Name() {

    const router = useRouter()

    const [name, setName] = useContext(NameContext);

    const handleChange = event => {
        setName(event.target.value);
    };

    return (
        <div className="static-head">
            <Container>
                <Row className="justify-content-center">
                    <Col className="align-self-center text-center">
                        <h1 className="title">名前</h1>
                        <br />
                        <Col
                            md={{
                                offset: 3,
                                size: 6
                            }}>
                            <FormGroup className="col-md-12">
                                <Input type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="あなたの名前を入力してください"
                                    onChange={handleChange} />
                            </FormGroup>
                        </Col>

                        <Col md="12">
                            <Button
                                disabled={name.length === 0}
                                className="btn btn-success waves-effect waves-light m-r-10"
                                onClick={() => router.push('/question?qid=0')}
                            >
                                入力
                            </Button>
                        </Col>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}
