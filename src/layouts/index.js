import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"
import styled from 'styled-components'
import { rhythm } from "../utils/typography"
import SocialIcons from '../components/SocialIcons'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
`

const linkStyle = css({ float: `right` })

export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}>
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}>
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    {children()}
    <FooterContainer>
      <SocialIcons flexDirection="row" width="240px"/>
    </FooterContainer>

  </g.Div>

export const query = graphql `
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
