/* eslint-disable */
import React from 'react';
import { useState, useContext } from 'react';
import { Card, Button, CardTitle, CardText, CardBody, Row, Col, Container, Spinner } from 'reactstrap';
import { useRouter } from 'next/router'

const Cards = ({ info }) => {

    const router = useRouter()

    const [isFinal, setIsFinal] = useState(false);

    const buttonClick = (event) => {

        if (info.isEnd) {
            setIsFinal(true)
            setTimeout(() => {
                router.push('/result')
            }, 3000);
        }
        else {
            let nextID = info.id + 1
            let url = '/question?qid=' + nextID

            router.push(url)
        }

    };

    let spinnerHeight = isFinal ? '3rem' : '0rem'

    return (
        <div>
            <div className="spacer" id="card-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs='12' className="text-center">
                            <h1 className="title font-bold">{info.topic}</h1>
                            {/* <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6> */}
                            <Spinner
                                color="white"
                                className={isFinal ? 'visible' : 'invisible'}
                                style={{
                                    height: spinnerHeight,
                                    width: spinnerHeight
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col xs="6" md="6">
                        {/* <Button>Go somewhere</Button> */}
                        {/* <Card className="card-shadow" outline={false}> */}
                        {/* <CardTitle>Yes</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
                        {/* <CardBody> */}
                        <Button
                            active
                            disabled={isFinal}
                            color="danger"
                            className="btn-block mr-1 mt-1 btn-lg"
                            onClick={buttonClick}
                        >いいえ</Button>
                        {/* </CardBody> */}
                        {/* </Card> */}
                    </Col>
                    <Col xs="6" md="6">
                        <Button
                            active
                            disabled={isFinal}
                            color="success"
                            className="btn-block mr-1 mt-1 btn-lg"
                            onClick={buttonClick}
                        >はい</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cards;
