import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { EyeFill } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const SingleCard = ({ id, date, category, photo, title, desc, view }) => {
    return (
        <Col sm={12} md={4} className='card-item'>
            <div className="card-top-info d-flex justify-content-between align-items-center ps-3">
                <div className="mask-img">
                    <img src="https://frenify.com/work/envato/frenify/wp/salla/1/wp-content/themes/salla/framework/svg/brush.svg" alt="webkit" width={100} />
                    <span>{date}</span>
                </div>
                <div className="divider">
                    <span></span>
                </div>
                <div className="category">
                    <a href="/" className='text-decoration-none text-uppercase'>{category}</a>
                </div>
            </div>
            <Card>
                <div className="cards-joinner"></div>
                <div className="card-bg p-4">
                    <Card.Img variant="top" src={photo} />
                    <Card.Body className='text-center'>
                        <Card.Title>
                            <Link to={`/card/${id}`} className='text-decoration-none'>{title}</Link>
                        </Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                    </Card.Body>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className='read-line'></span>
                    <div className="foot-data d-flex justify-content-between align-items-center text-white">
                        <LinkContainer to={`/card/${id}`}>
                            <Button variant="none" className='text-white'>Read More</Button>
                        </LinkContainer>
                        <span className='d-flex justify-content-between align-items-center'><EyeFill className='me-1'/> {view}</span>
                    </div>
                    <span className='read-line'></span>
                </div>
            </Card>
        </Col>
    )
}

export default SingleCard