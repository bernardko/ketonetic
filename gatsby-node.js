/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    return graphql(`
      {
        wagtail
        {
          landingPages {
              slug
              specificPageType
              pageUrl
          }
          categoryPages {
            slug
            specificPageType
            pageUrl
          }
          redirects {
            oldPath,
            link
          }
        }
      }
      
    `).then(result => {
        const processPages = page => {
          const appLabel = page.specificPageType.split(".")[0]
          var characterList = page.specificPageType.split(".")[1].split("")
          const firstLetter = characterList.shift().toLowerCase()
          const pageTemplate = path.resolve("./src/templates/" + appLabel + "/" + firstLetter + characterList.join("") + ".js")
          createPage({
              // Path for this page — required
              path: page.pageUrl,
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
        }

        const processRedirects = redirect => {
          createRedirect({
            fromPath: redirect.oldPath,
            isPermanent: true,
            redirectInBrowser: true,
            toPath: redirect.link
          })
          createRedirect({
            fromPath: redirect.oldPath + "/",
            isPermanent: true,
            redirectInBrowser: true,
            toPath: redirect.link
          })

        }

        result.data.wagtail.landingPages.forEach(processPages)
        result.data.wagtail.categoryPages.forEach(processPages)
        result.data.wagtail.redirects.forEach(processRedirects)
    })

}

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    Wagtail_ImageObjectType: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          if (source.src) {
            return createRemoteFileNode({
              url: source.src,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })
          } else {
            return null
          }
        },
      },
    },
  })
}
