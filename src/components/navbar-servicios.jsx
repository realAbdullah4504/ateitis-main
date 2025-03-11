import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { menuServicios } from "../utils/menu";
import logoAteitis from "../images/new-logo-ateitis.png";

export default function NavbarServicios() {
    const menu = menuServicios["es"];
    return (
        <Navbar collapseOnSelect expand="md" className="navbar-menu">
            <Navbar.Brand href="#home" className="">
                <img src={logoAteitis} alt="Ateitis Logo"  alt="Ateitis Logo" style={{
                    maxWidth:"200px",
                }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='flex-wrap' >
                <div className='d-flex  justify-content-evenly flex-md-row flex-column flex-wrap ' style={{
                    flex:1,
                    minWidth:"fit-content"

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
