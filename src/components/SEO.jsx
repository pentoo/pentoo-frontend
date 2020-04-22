/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  const query = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          title
          description
          author
          keywords
          logo {
            asset {
              fluid {
                srcWebp
              }
            }
          }
        }
      }
    `
  )

  const site = query.sanitySiteSettings

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.title}
      titleTemplate={`%s | ${site.author}`}
      meta={[
        {
          name: `description`,
          content: site.description,
        },
        {
          property: `og:title`,
          content: site.title,
        },
        {
          property: `og:description`,
          content: site.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.author,
        },
        {
          name: `twitter:title`,
          content: site.title,
        },
        {
          name: `twitter:description`,
          content: site.description,
        },
      ]
        .concat(
          site.keywords.length > 0
            ? {
                name: `keywords`,
                content: site.keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
}

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired,
// }

export default SEO
