import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/icon.png" }) {
          childImageSharp {
            fixed(width: 65, height: 65) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3
        css={css`
          margin-bottom: ${rhythm(0.5)};
          display: inline-block;
        `}
      >
        <Img fixed={data.file.childImageSharp.fixed} alt="" />
        {data.site.siteMetadata.title}
      </h3>
    </Link>
  )
}
