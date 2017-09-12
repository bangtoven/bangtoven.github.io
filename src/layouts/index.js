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

const ListLink = props =>
  <li style = {{ display: 'inline-block', marginRight: '1rem'}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


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
        Jungho!
      </g.H3>
    </Link>
      <ul style={{ listStyle: 'none', float: 'right'}}>
        <ListLink to="/projects">Projects</ListLink>
        <ListLink to="/about">About</ListLink>
      </ul>
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
