/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
      {
        wagtail
        {
            landingPages {
                slug
                specificPageType
                urlPath
            }
        }
      }
      
    `).then(result => {
        
        result.data.wagtail.landingPages.forEach(page => {
            var characterList = page.specificPageType.split(".")[1].split("")
            const firstLetter = characterList.shift().toLowerCase()
            const pageTemplate = path.resolve("./src/templates/" + firstLetter + characterList.join("") + ".js")
            console.log(page.urlPath)
            createPage({
                // Path for this page — required
                path: page.urlPath,
                component: pageTemplate,
                context: {
                  // Add optional context data to be inserted
                  // as props into the page component..
                  //
                  // The context data can also be used as
                  // arguments to the page GraphQL query.
                  //
                  // The page "path" is always available as a GraphQL
                  // argument.
                  slug: page.slug,
                },
            })
        })
    })

}