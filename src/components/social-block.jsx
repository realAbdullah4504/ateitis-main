import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage,getImage } from "gatsby-plugin-image";
import { Col } from "react-bootstrap";

export default function SocialBlock() {
  const data = useStaticQuery(SocialBlockQuery);
  const redes = data.allWpRedSocial.edges.sort((a, b) =>
    a.node.acfRedesSociales.orden > b.node.acfRedesSociales.orden ? 1 : -1
  );

  return (
    <Col className="social-icon-container">
      {redes.map(red => (
        <a
          href={red.node.acfRedesSociales.url}
          key={red.node.id}
          target="_blank"
          rel="noreferrer"
        >
          {/* <GatsbyImage image={getImage(red.node.acfRedesSociales.icono.localFile.childImageSharp.fixed)}></GatsbyImage> */}
        
        </a>
      ))}
    </Col>
  );
}

const SocialBlockQuery = graphql`
  query SocialBlockQuery {
    allWpRedSocial {
      edges {
        node {
          id
          title
          acfRedesSociales {
            fieldGroupName
            orden
            url
            icono {
              id
              sourceUrl
              localFile {
                childImageSharp {
                  id
                  fixed(width: 48) {
                    ...GatsbyImageSharpFixed_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
