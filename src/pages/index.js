import React from "react"
import g from "glamorous"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"

import profilePic from './about/profile.jpg'

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <center>
        <img
        src={profilePic}
        alt={`Jungho Bang`}
        style={{
          marginTop: 0,
          marginBottom: rhythm(1),
          width: rhythm(10),
          borderRadius: rhythm(5)
        }}/>
        <br/>
        
        <g.H3 marginBottom={rhythm(1.5)} display={"inline-block"}>
        Hello, World!<br/>My name is Jungho Bang.
        </g.H3>
        <br/>
        
        <g.Span color="#555">
        <p>CS grad student. iOS developer. Entrepreneur. Media artist.</p>
        <p>On a mission to support the musicians in their creative processes <br/>
        and to bring accessible musical tools to the general public.</p>
        </g.Span>
      </center>
    </div>
  )
}

// {data.allMarkdownRemark.edges.map(({ node }) =>
//         <div>
//           <Link
//             to={node.fields.slug}
//             css={{ textDecoration: `none`, color: `inherit` }}
//           >
//           <g.H3 marginBottom={rhythm(1 / 4)}>
//             {node.frontmatter.title}{" "}
//             <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
//           </g.H3>
//           <p>
//             {node.excerpt}
//           </p>
//           </Link>
//         </div>
//       )}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order:DESC}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`