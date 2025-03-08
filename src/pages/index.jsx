import { graphql, Link } from "gatsby";
import React from "react";
import MainAnimation from "../components/main-animation.jsx";
import SEO from "../components/seo.jsx";
import logoAcademy from "../images/logo-ateitis-academy.png";
import logo from "../images/logo-ateitis.png";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import flagUsa from "../images/flag-usa.png";

export default function IndexPage({ data }) {
  const language = "es";

  // console.log(data);
  /* Cargar los menues de wordpress, via grapqhl page query */
  const serviciosLink = data.menu.edges[0].node.menuItems.nodes.find(x =>
    x.url.includes("servicios")
  );
  const academyLink = data.menu.edges[0].node.menuItems.nodes.find(x =>
    x.url.includes("academy")
  );

  return (
    <div id="index">
      <SEO title="Inicio" />
      <div className="background">
        <div className="bg-img btn-primary"></div>
        <div className="bg-img bg-computer">
          <MainAnimation />
        </div>
        <div className="circle"></div>
      </div>
      <a className="languageSelector" href="/en/">
        <img src={flagUsa} alt="" />
        <span>ENGLISH SITE</span>
      </a>
      <div className="nav-container">
        <nav className="left">
          <div className="imgWrapper">
            {/* <StaticImage
              fluid={data.getLogoAteitis.childImageSharp.fluid}
              alt="Ateitis Logo"
              style={{ height: "100%", width: "100%" }}
            /> */}
            <GatsbyImage
              image={getImage(data.getLogoAteitis)}
              alt="Ateitis Logo"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <Link to={serviciosLink.url}>{serviciosLink.label}</Link>
        </nav>
        <nav className="right">
          <div className="imgWrapper">
            {/* <StaticImage
              fluid={data.getLogoAcademy.childImageSharp.fluid}
              alt="Ateitis Logo"
              style={{ height: "100%", width: "100%" }}
            /> */}
            <GatsbyImage
              image={getImage(data.getLogoAcademy)}
              alt="Ateitis Logo"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <Link to={academyLink.url}>{academyLink.label}</Link>
        </nav>
      </div>
    </div>
  );
}

export const menuQuery = graphql`
  query {
    menu: allWpMenu(filter: { slug: { glob: "*landing-page*" } }) {
      edges {
        node {
          slug
          name
          menuItems {
            nodes {
              label
              url
            }
          }
        }
      }
    }
    getLogoAteitis: file(relativePath: { eq: "logo-ateitis.png" }) {
      childImageSharp {
        gatsbyImageData(
          
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    getLogoAcademy: file(relativePath: { eq: "logo-ateitis-academy.png" }) {
      childImageSharp {
        gatsbyImageData(
          
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;
