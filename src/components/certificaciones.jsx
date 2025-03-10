import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage,getImage } from "gatsby-plugin-image";

export default function Certificaciones() {
  const data = useStaticQuery(certificacionesQuery);
  if (!data) return null;

  const imagen =
    data.allWpPage.edges[0].node.acfNuestrasCertificaciones.imagen.localFile
      .childImageSharp.fluid;

  // return <GatsbyImage image={getImage(imagen)} alt="Certificaciones" />;\
  return <></>
}

const certificacionesQuery = graphql`
  query CertificacionesQuery {
    allWpPage(filter: { slug: { eq: "nuestras-certificaciones" } }) {
      edges {
        node {
          slug
          id
          acfNuestrasCertificaciones {
            fieldGroupName
            imagen {
              id
              sourceUrl
              localFile {
                id
                childImageSharp {
                  id
                  fluid {
                    ...GatsbyImageSharpFluid_noBase64
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
