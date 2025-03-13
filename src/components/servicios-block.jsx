import React, { Fragment } from "react";
import BotonModal from "./boton-modal";
import Titulo from "./titulo";
import Parrafo from "./parrafo";
import { Col, Container, Row } from "react-bootstrap";
import translations from "../utils/translations";

export default function ServiciosBlock({ data, language }) {
  const contenido = data?.serviciosPage?.edges[0]?.node;
  return (
    <Fragment>
      <Container>
        <Row className="mb-4 mt-4">
          <Col>
            <Titulo
              id={translations.services[language]}
              data={translations.services[language]}
            ></Titulo>
          </Col>
        </Row>

        {contenido?.acfServicios.descripcion && (
          <Row className="mb-4 mt-4 mx-xl-2">
            <Col>
              <Parrafo data={contenido.acfServicios.descripcion}></Parrafo>
            </Col>
          </Row>
        )}
        <Row className="mb-4 mt-4 mx-xl-2">
          {data.allWpServiciosItem.edges.map(item => (
            <Col md={6} lg={4} key={item.node.id} className="mb-3 mt-3">
              <BotonModal
                data={item}
                key={item.node.id}
                nodeName="acfServiciosListado"
              ></BotonModal>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}
