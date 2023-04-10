import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'

const CardForm = ({onFormSubmit, editcard}) => {
    const [iphoto, setIPhoto] = useState(editcard ? editcard.photo : "");
    const [ititle, setITitle] = useState(editcard ? editcard.title : "");
    const [idesc, setIDesc] = useState(editcard ? editcard.desc : "");

    const formSubmit = e => {
        e.preventDefault();
        if (!iphoto || !ititle || !idesc) {
            alert('Please,fill the blanks');
        } else {
            onFormSubmit({
                photo: iphoto,
                title: ititle,
                desc: idesc,
            })
        }
    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Col md={6}>
                <Form onSubmit={formSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Photo url:</Form.Label>
                        <Form.Control type="text" value={iphoto} placeholder="Photo link" onChange={e => setIPhoto(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" value={ititle} placeholder="Title" onChange={e => setITitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" value={idesc} placeholder="Description" onChange={e => setIDesc(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" type="submit" className='d-flex mx-auto mt-4'>
                        {editcard ? "Edit" : "Share"}
                    </Button> 
                </Form>
            </Col>
        </div>
    )
}

export default CardForm