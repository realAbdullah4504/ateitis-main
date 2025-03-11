import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { menuServicios } from "../utils/menu";
import logoAteitis from "../images/new-logo-ateitis.png";

export default function NavbarServicios() {
    const menu = menuServicios["es"];
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-menu">
            <Navbar.Brand href="#home" className="">
                <img src={logoAteitis} alt="Ateitis Logo" width={'200px'} style={{
                    // maxWidth: '200px',
                }} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav " className='' >
                <div className='d-flex  justify-content-center  flex-lg-row flex-column' style={{
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
