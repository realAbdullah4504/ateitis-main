import React from "react";
import { Helmet } from "react-helmet";
import NavbarMenu from "../components/navbar";
import logo from "../images/logo-ateitis.png";
import NosotrosBlock from "../components/nosotros-block";
import { graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import ServiciosBlock from "../components/servicios-block";
import ClientesBlock from "../components/clientes-block";
import ContactoBlock from "../components/contacto-block";
import SocialBlock from "../components/social-block";
import SEO from "../components/seo";
import StickyImg from "../images/landing-page-computer.png";
import flagUsa from "../images/flag-usa.png";
import ScrollArrow from "../components/ui/scroll-arrow";
import NavbarServicios from "../components/navbar-servicios";

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
            <Container>
              <Row>
                <Col>
                  <NosotrosBlock
                    data={{
                      nosotrosPage: data.nosotrosPage,
                      allWpNosotrosItem: data.allWpNosotrosItem,
                    }}
                    language={language}
                  ></NosotrosBlock>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <ServiciosBlock
                    data={{
                      serviciosPage: data.serviciosPage,
                      allWpServiciosItem: data.allWpServiciosItem,
                    }}
                    language={language}
                  ></ServiciosBlock>
                </Col>
              </Row>
            </Container>
            <Container></Container>
          </div>
        </div>
        <Container fluid>
          <Row>
            <ClientesBlock
              data={{ clientes: data.clientesSatisfechos }}
              language={language}
            ></ClientesBlock>
          </Row>
        </Container>

        <Container fluid className="seccion-contacto mt-4">
          <Row>
            <ContactoBlock language={language}></ContactoBlock>
          </Row>
          <Row className="py-3">
            <SocialBlock></SocialBlock>
          </Row>
        </Container>
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
