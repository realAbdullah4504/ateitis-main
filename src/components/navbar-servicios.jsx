import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { menuServicios } from "../utils/menu";
import logoAteitis from "../images/new-logo-ateitis.png";

export default function NavbarServicios() {
    const menu = menuServicios["es"];
    return (
        <Navbar collapseOnSelect expand="md" className="navbar-menu">
            <Navbar.Brand href="#home" className="">
                <img src={logoAteitis} alt="Ateitis Logo" width={'100%'} style={{
                    maxWidth: '200px',
                }} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <div className='d-flex flex-wrap justify-content-center flex-md-row flex-column' style={{
                    flex: 1,
                }}>
                    {menu.map(item => (
                        <Nav.Item key={item.url}>
                            <Nav.Link href={item.url} className="hvr-underline-from-center">
                                {item.label}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </div>
                <div className="academy-section">
                    <span>¿CONOCES NUESTRA ACADEMIA?</span>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
