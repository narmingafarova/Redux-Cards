import React, { useState } from 'react'
import { Button, Container, Modal, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { HouseFill, Search } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    return (
        <>
            <Navbar bg="light" expand="lg" className='mt-3'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/card">
                                <Nav.Link>Cards</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Features" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/">404 Page</NavDropdown.Item>
                                <NavDropdown.Item href="/">Protected Page</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/">Post Styles</Nav.Link>
                        </Nav>
                        <ul className="icons mb-0 ps-0 d-flex justify-content-between align-items-center">
                            <li className='list-unstyled me-4'>
                                <LinkContainer to="/dashboard">
                                    <span className='d-flex justify-content-center align-items-end'>
                                        <HouseFill fontSize={25} className='me-2' /> Dashboard
                                    </span>
                                </LinkContainer>
                            </li>
                            <li className='list-unstyled'>
                                <Button variant='none' onClick={() => { setFullscreen(fullscreen); setShow(true) }}>
                                    <Search fontSize={20} />
                                </Button>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <form className='d-flex justify-content-between align-items-center'>
                        <div className="input-search">
                            <input type="text" placeholder='Type at least one character to search...' />
                        </div>
                        <div className="search d-flex justify-content-center align-items-center">
                            <input type="submit" value="Search" />
                            <Search fontSize={20}/>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Header