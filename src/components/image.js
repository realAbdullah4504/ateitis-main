import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage,getImage } from "gatsby-plugin-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  // return <GatsbyImage image={getImage(data.placeholderImage.childImageSharp.fluid)} alt="A Gatsby astronaut" />;
  return <></>
};

export default Image;
