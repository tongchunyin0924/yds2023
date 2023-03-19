import React from "react";
import { useState } from 'react';
import Cards from '../components/basic/cards'
import { useRouter } from 'next/router'

import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const data = [
    {
        id: 0,
        topic: "日本語で話せますか？"
    },
    {
        id: 1,
        topic: "イエス様を信じていますか？"
    },
    {
        id: 2,
        topic: "聖書を読むことがありますか？"
    },
    {
        id: 3,
        topic: "チームワークのことを大切していますか？"
    },
    {
        id: 4,
        topic: "異文化を体験したいですか？",
        isEnd: true
    },
    
];

export default function Name() {
    const router = useRouter()
    const { qid } = router.query

    let id = qid ? qid : 0
    let info = data[id]

    return (
        <div className="static-head">
            <Container>
                <Cards info={info}/>
            </Container>
        </div>
    );
}
