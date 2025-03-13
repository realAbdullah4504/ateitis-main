import React, { Fragment } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import moveRight from "../images/move-right.png";
import { Modal } from "react-bootstrap";

export default function BotonModal({
  data,
  nodeName,
  mostrarFooter = false,
  iconoEnBody = true,
}) {
  const titulo = data.node.title;
  const { color, subTitulo, texto, icono } = data.node[nodeName];
  const logo = icono.localFile.childImageSharp.gatsbyImageData;
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Fragment>
      <div
        onClick={() => {
          setModalShow(true);
        }}
        className={`boton-modal hvr-bob ${nodeName === "acfServiciosListado" && 'align-items-start px-12'}`}
      >
        <div className={`image-container `}>
          <GatsbyImage image={getImage(logo)}></GatsbyImage>
        </div>
        <div className="label">
          <div className={`boton-modal-titulo ${nodeName === "acfServiciosListado" && 'text-start'}`}>{titulo}</div>
          <div className={`boton-modal-subtitulo ${nodeName === "acfServiciosListado" && 'text-start'}`}>{subTitulo?.toUpperCase()}</div>
        </div>
        {nodeName === "acfServiciosListado" &&
          <div className="learn-more"><span>Aprender más <img src={moveRight} style={{
            marginLeft: '-5px'
          }} /></span> </div>
        }
      </div>
      <ModalBotonModal
        // mostrarFooter={mostrarFooter}
        data={{
          titulo,
          color,
          subTitulo,
          texto,
          icono,
          logo,
          iconoEnBody,
          mostrarFooter,
          nodeName
        }}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      ></ModalBotonModal>
    </Fragment>
  );
}

function ModalBotonModal(props) {
  const {
    titulo,
    color,
    subTitulo,
    texto,
    icono,
    logo,
    iconoEnBody,
    mostrarFooter,
    nodeName
  } = props.data;
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {nodeName === "acfServiciosListado" ? "" : subTitulo} {titulo}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {iconoEnBody && (
          <div className="background">
            <GatsbyImage image={getImage(logo)}></GatsbyImage>
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: texto }}></div>
      </Modal.Body>
      {mostrarFooter && (
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          <GatsbyImage image={getImage(logo)}></GatsbyImage>
        </Modal.Footer>
      )}
    </Modal>
  );
}
