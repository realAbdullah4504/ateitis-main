import React from 'react'
import Titulo from './titulo'
import Certificaciones from './certificaciones'
import { Col, Container, Row } from 'react-bootstrap'
import translations from '../utils/translations'

export default function CertificacionesBlock({ language }) {
  return (
    <>
      <Container>
        <Row className="mb-4 mt-4">
          <Col>
            <Titulo
              id="certificaciones"
              data={translations.ourCertifications[language]}
            // showInicial={false}
            ></Titulo>
          </Col>
        </Row>
        <Row className="mb-4 mt-4">
          <Col className="hvr-bob">
            <Certificaciones></Certificaciones>
          </Col>
        </Row>
      </Container>
    </>
  )
}
