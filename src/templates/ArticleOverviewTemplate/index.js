import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import ArticleOverview from 'components/ArticleOverview'

function ArticleOverviewTemplate({ data, location }) {
  const { markdownRemark, logoCodea } = data
  const { frontmatter, html, excerpt, timeToRead, fields } = markdownRemark
  const { slug } = fields
  const imageDefault = logoCodea.edges[0].node.resize.src

  return (
    <Layout marginTop title={frontmatter.title} location={location}>
      <Helmet>
        <title>{frontmatter.title}</title>
        <link
          rel="author"
          href={`https://codea.com.mx/${frontmatter.author.id}`}
        />
        <meta
          name="description"
          content={frontmatter.excerpt ? frontmatter.excerpt : excerpt}
        />
        <meta property="og:description" content={excerpt} />
        <meta name="twitter:description" content={excerpt} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:type" content="article" />
        <meta name="article:author" content={frontmatter.author.id} />
        <meta name="twitter:creator" content={frontmatter.author.twitter} />
        <meta name="author" content={frontmatter.author.id} />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={`${timeToRead} min read`} />
        <meta name="article:published_time" content={frontmatter.date} />
        <meta
          property="og:image"
          content={`https://codea.com.mx${imageDefault}`}
        />
        <meta
          name="twitter:image"
          content={`https://codea.com.mx${imageDefault}`}
        />
      </Helmet>

      <ArticleOverview
        title={frontmatter.title}
        date={frontmatter.date}
        author={frontmatter.author}
        slug={slug}
        html={{ __html: html }}
      />
    </Layout>
  )
}

ArticleOverviewTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
      }
      excerpt(pruneLength: 200)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author {
          id
          bio
          firstName
          lastName
          twitter
          avatar {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    logoCodea: allImageSharp(
      filter: { fixed: { originalName: { eq: "codea.png" } } }
    ) {
      edges {
        node {
          resize {
            src
          }
        }
      }
    }
  }
`
export default ArticleOverviewTemplate
