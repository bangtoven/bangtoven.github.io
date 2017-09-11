// import React from "react"

// export default ( { data } ) =>
//   <div>
//   	<h2>About {data.site.siteMetadata.title}</h2>
//     <p>
      // It has been my dream to help the musicians with their creative processes with my engineering knowledge, 
      // and also help the general public to have better access to musical tools. <br/>
      // Through various experiences in computer music, 
      // I learned that my passion lies with music, 
      // and that I should continue with my studies in order to combine my engineering background 
      // to the various needs of the contemporary music industry.
//     </p>
//   </div>

// export const query = graphql`
//   query AboutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql-tag';
import g from 'glamorous';
import { rhythm } from "../../utils/typography"

import profilePic from './profile.jpg'
import astronaut from './astronaut.jpg'
import drumstick from './drumstick.jpg'
import map from './map.jpg'
import skydive from './skydive.jpg'
// import siteShape from '../shapes/site';

const maLink = <a href="https://www.youtube.com/watch?v=JvUMV1N7eGM">Massachusetts</a>;
const ghLink = <a href="https://github.com/knpwrs">my GitHub</a>;
const patsLink = <a href="http://www.patriots.com/">New England Patriots</a>;
const cdpLink = <a href="http://cursordanceparty.com">Cursor Dance Party</a>;

const ResumeHeader = g.header(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '> h5': {
    margin: 0,
  },
}));

const Image = g.img(({ theme }) => ({
  ...theme.centerPadding,
  borderRadius: rhythm(0.5),
  marginBottom: 0
})) 


const H2 = g.h2(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const H3 = g.h3(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const H4 = g.h4(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const P = g.p(({ theme }) => ({
  ...theme.centerPadding,
}));
const Ul = g.ul(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
  marginLeft: `${theme.spacingPx * 4}px`,
}));



const About = ({ data: { site: { siteMetadata: site } } }) => (
  <main>
    <img
          src={profilePic}
          alt={`Jungho Bang`}
          style={{
            float: 'right',
            marginRight: rhythm(1),
            marginTop: rhythm(.5),
            marginBottom: rhythm(.5),
            width: rhythm(10),
            height: rhythm(10),
            borderRadius: rhythm(0.5)
          }}
        />
    <H2>About me</H2>
      <P>
      It has been my dream to help the musicians with their creative processes with my engineering knowledge, 
      and also help the general public to have better access to musical tools. <br/>
      Through various experiences in computer music, 
      I learned that my passion lies with music, 
      and that I should continue with my studies in order to combine my engineering background 
      to the various needs of the contemporary music industry.
      </P>
    <H3>Fun facts</H3>
    <Image src={astronaut}/>
    <P>I was one of the top 400 candidates in <a href="https://en.wikipedia.org/wiki/Korean_Astronaut_Program">Korean Astronaut Program</a>.</P>
    <img src={map}/>
    <P>I have travelled 22 countries. In 2008, I went to Copenhagen flying over Asia. By coming back there from west crossing Atlantic to attend NIME 2017, I completed a circle around the globe!</P>
    <img src={skydive}/>
    <P>I did skydiving!</P>
    <img src={drumstick}/>
    <P>I have Lars Ulrich's drumstick that I caught at Metallica's concert during their '06 tour.</P>
  </main>
);

// About.propTypes = {
//   data: PropTypes.shape({
//     site: siteShape,
//   }).isRequired,
// };

export default About;

export const aboutPageQuery = graphql`
  query AboutPageSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
