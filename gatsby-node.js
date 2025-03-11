const path = require(`path`);
const { toTitleCase } = require("./src/utils/string-utils");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWpSimpleProduct(filter: { status: { eq: "publish" } }) {
        edges {
          node {
            id
            slug
            acfCursos {
              es {
                slugEs
              }
            }
          }
        }
      }
    }
  `);

  result.data.allWpSimpleProduct.edges.forEach(({ node }) => {
    const languages = ["es"];

    for (let language of languages) {
      const slug = node.acfCursos[language]["slug" + toTitleCase(language)]
        ? node.acfCursos[language]["slug" + toTitleCase(language)]
        : node.slug;
      const slugPrefix = language === "es" ? "" : `${language}/`;
      const slugPath = `${slugPrefix}academy/${slug}`;

      createPage({
        path: slugPath,
        component: path.resolve(`./src/templates/curso-detail.jsx`),
        context: {
          slug: node.slug,
          language: language,
          localizedSlug: slug,
          //   acfCursos: acfCursos,
        },
      });
    }
  });
};
