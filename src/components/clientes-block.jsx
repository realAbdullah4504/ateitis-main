import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfiniteScroller from "./infiniteScroller";
import Titulo from "./titulo";

import translations from "../utils/translations";

export default function ClientesBlock({ language}) {

  return (
    <Fragment>
      <div className="main-section-content">
      <Container className="mt-4 mb-4 ">
        <Row>
          <Col>
            <Titulo
              id={translations.clients[language]}
              data={translations.clients[language]}
              //   data={contenido.title}
            ></Titulo>
          </Col>
        </Row>
      </Container>
      </div>
      <Container fluid className="mt-4 mb-4">
        <Row>
          <InfiniteScroller />
        </Row>
      </Container>
    </Fragment>
  );
}
