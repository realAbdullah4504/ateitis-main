import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ContactoBlock from './contacto-block'

export default function Contacto({language}) {
    return (
        <Container fluid className="seccion-contacto mt-4">
            <Row>
                <ContactoBlock language={language}></ContactoBlock>
            </Row>

        </Container>
    )
}
