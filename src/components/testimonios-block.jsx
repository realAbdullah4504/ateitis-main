import React, { Fragment } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import Testimonio from "./testimonio";
import Titulo from "./titulo";
import translations from "../utils/translations";

export default function TestimoniosBlock({ data, language }) {
  const clientesSatisfechos = data?.clientes?.edges;
  clientesSatisfechos?.sort((a, b) =>
    a.node.acfClientesSatisfechos.orden > b.node.acfClientesSatisfechos.orden
      ? 1
      : -1
  );

  return (
    <Fragment>
      <div className="main-section-content">
        <Container className="mt-4 mb-4">
          <Row>
            <Col>
              <Titulo
                id="clientes-satisfechos"
                data={translations.satisfiedClients[language]}
                // showInicial={false}
              ></Titulo>
            </Col>
          </Row>
          <div className= "d-none d-lg-flex testimonial-container">
            {clientesSatisfechos?.map(cliente => (
              <Testimonio
                key={cliente.node.id}
                cliente={cliente.node}
                carousel={false}
              ></Testimonio>
            ))}
          </div>
          <Row className="justify-content-around d-lg-none">
            {testimonioCarousel({ clientesSatisfechos })}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

const testimonioCarousel = function ({ clientesSatisfechos }) {
  return (
    <Carousel indicators={false}>
      {clientesSatisfechos?.map(cliente => (
        <Carousel.Item key={`${cliente.node.id}_carousel`}>
          <Testimonio cliente={cliente.node} carousel></Testimonio>
        </Carousel.Item>
      ))}
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel>
  );
};
