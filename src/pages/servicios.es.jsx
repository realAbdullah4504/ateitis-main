import React from "react";
import { Helmet } from "react-helmet";
import NosotrosBlock from "../components/nosotros-block";
import { graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import ServiciosBlock from "../components/servicios-block";
import ClientesBlock from "../components/clientes-block";
import ContactoBlock from "../components/contacto-block";
import SocialBlock from "../components/social-block";
import SEO from "../components/seo";
import ScrollArrow from "../components/ui/scroll-arrow";
import NavbarServicios from "../components/navbar-servicios";
import CertificacionesBlock from "../components/certificaciones-block";
import escribinosImg from "../images/escribinos.png";
import escribinosImgEn from "../images/escribinos-en.png";
import TestimoniosBlock from "../components/testimonios-block";
import FaqsBlock from "../components/faqs-block";
import { faqsData } from "../constants/faqs";

export default function ServiciosPage({ data, location }) {
  const language = "es";

  return (
    <div id="servicios-page">
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z9YSTHJ42D"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z9YSTHJ42D');
            gtag('config', 'AW-16693065981');
          `}
        </script>
      </Helmet>
      <SEO title="Servicios" />
      <ScrollArrow />

      <NavbarServicios />

      <div className="">
        <div className="main-section">
          <div className="main-section-content">

            <NosotrosBlock
              data={{
                nosotrosPage: data.nosotrosPage,
                allWpNosotrosItem: data.allWpNosotrosItem,
              }}
              language={language}
            ></NosotrosBlock>
            <ServiciosBlock
              data={{
                serviciosPage: data.serviciosPage,
                allWpServiciosItem: data.allWpServiciosItem,
              }}
              language={language}
            ></ServiciosBlock>
            <CertificacionesBlock language={language}></CertificacionesBlock>
          </div>
        </div>
        <ClientesBlock

          language={language}
        ></ClientesBlock>

        <TestimoniosBlock data={{ clientes: data.clientesSatisfechos }} language={language}></TestimoniosBlock>
        <FaqsBlock data={{ faqs: faqsData }} language={language}></FaqsBlock>


        {/* <Container fluid className="escribinos-container">
          <Row className="justify-content-end">
            {
              <img
                src={language == "es" ? escribinosImg : escribinosImgEn}
                alt="Escribinos"
                className="img-fluid"
              />
            }
          </Row>
        </Container>
        <Container fluid className="seccion-contacto mt-4">
          <Row>
            <ContactoBlock language={language}></ContactoBlock>
          </Row>
          <Row className="py-3">
            <SocialBlock></SocialBlock>
          </Row>
        </Container> */}
      </div>
    </div>
  );
}

export const dataQuery = graphql`
  query {
    nosotrosPage: allWpPage(
      filter: { slug: { glob: "*nosotros*" }, language: { slug: { eq: "es" } } }
    ) {
      edges {
        node {
          title
          slug
          acfNosotros {
            descripcion
            fieldGroupName
          }
        }
      }
    }
    allWpNosotrosItem(filter: { language: { slug: { eq: "es" } } }) {
      edges {
        node {
          id
          title
          acfNosotrosListado {
            color
            subTitulo
            orden
            texto
            icono {
              sourceUrl
              localFile {
                id
                childImageSharp {
                  id
                  gatsbyImageData(width: 100, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
    allWpServiciosItem(filter: { language: { slug: { eq: "es" } } }) {
      edges {
        node {
          id
          title
          acfServiciosListado {
            color
            subTitulo
            orden
            texto
            icono {
              sourceUrl
              localFile {
                id
                childImageSharp {
                  id
                  gatsbyImageData(width: 100, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
    serviciosPage: allWpPage(
      filter: { slug: { glob: "*servicios*" }, language: { slug: { eq: "es" } } }
    ) {
      edges {
        node {
          title
          slug
          acfServicios {
            descripcion
            fieldGroupName
          }
        }
      }
    }
    clientesSatisfechos: allWpClientSatisfecho(filter: { language: { slug: { eq: "es" } } }) {
      edges {
        node {
          id
          slug
          title
          acfClientesSatisfechos {
            fieldGroupName
            orden
            puestoCliente
            texto
            fotoCliente {
              id
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 100, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`;
