import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import line from "../images/line2.png";
import linkedin from "../images/inLogo.png";

export default function Testimonio({ cliente, carousel }) {
  const nombre = cliente.title;
  const { puestoCliente, texto } = cliente.acfClientesSatisfechos;
  const imagen =
    cliente.acfClientesSatisfechos.fotoCliente.localFile.childImageSharp;

  // const extraClass = carousel ? "" : "col-lg-4 col-xl-4";

  return (
    <Fragment>
      <div className={`testimonio my-3`}>
        <div className="burbuja">
          <div className="texto">{texto}</div>
        </div>
        <img src={line}></img>
        <div className="foto-links">
          <div className="datos">
            <div className="nombre">{nombre}</div>
            <div className="puesto">{puestoCliente}</div>
            <img src={linkedin} className="linkedin" width={32}></img>
          </div>
          <GatsbyImage image={getImage(imagen)} imgClassName="avatar"></GatsbyImage>
        </div>
      </div>
    </Fragment>
  );
}
