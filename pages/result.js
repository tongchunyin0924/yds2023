import React from 'react';
import { useState, createContext, useContext } from 'react';
import { Card, Button, CardTitle, CardText, CardBody, Row, Col, Container } from 'reactstrap';
import Link from "next/link"

import { NameContext } from '../components/context/nameContext'

import { Fireworks } from '@fireworks-js/react'


export default function Result() {

  const [name, setName] = useContext(NameContext);

  return (
    <div>
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100
          }
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#000'
        }}
      />
      <div className="static-head">
        <Container>
          <Row>
            <Col xs="12" className="text-center">
              <h1 className="title text-white font-weight-bold">
                検査の結果：
                <br />
                {name} さん
                <br />
                短期宣教参加できます！
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="text-center">
              <Link href="/">
                <Button>バック</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
