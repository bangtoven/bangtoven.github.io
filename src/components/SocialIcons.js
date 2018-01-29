import React from 'react'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

import GithubIcon from 'react-icons/lib/fa/github'
import FacebookIcon from 'react-icons/lib/fa/facebook-square'
import HomeIcon from 'react-icons/lib/fa/home'
import MailIcon from 'react-icons/lib/fa/envelope'
import LinkedInIcon from 'react-icons/lib/fa/linkedin'
import InstaIcon from 'react-icons/lib/fa/instagram'
import YouTubeIcon from 'react-icons/lib/fa/youtube-play'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${props => '#777'};
  transition: color 175ms ease-in-out, transform 175ms ease-in-out;
  :hover {
    transform: scale(1.1);
    color: ${props => '#000'};
  }
`

const ExternalLink = props => {
  return (
    <Link target="_blank" rel="noopener" {...props}>
      {props.children}
    </Link>
  )
}

const Types = {
  facebook(props) {
    return (
      <ExternalLink
        hoverColor="#3b5998"
        href="https://www.facebook.com/bangtoven"
        {...props}
      >
        <FacebookIcon size={32} />
      </ExternalLink>
    )
  },
  git(props) {
    return (
      <ExternalLink
        hoverColor="#333333"
        href="https://github.com/bangtoven"
        {...props}
      >
        <GithubIcon size={32} />
      </ExternalLink>
    )
  },
  home(props) {
    return (
      <ExternalLink
        hoverColor="#fff"
        href="http://junghobang.me"
        {...props}
      >
        <HomeIcon size={32} />
      </ExternalLink>
    )
  },
  linkedin(props) {
    return (
      <ExternalLink
        hoverColor="#fff"
        href="https://www.linkedin.com/in/jungho-bang/"
        {...props}
      >
        <LinkedInIcon size={32} />
      </ExternalLink>
    )
  },
  mail(props) {
    return (
      <ExternalLink
        hoverColor="#fff"
        href="mailto:bjungho@umich.edu"
        {...props}
      >
        <MailIcon size={32} />
      </ExternalLink>
    )
  },
  instagram(props) {
    return (
      <ExternalLink
        hoverColor="#fff"
        href="https://www.instagram.com/jjungh0/"
        {...props}
      >
        <InstaIcon size={32} />
      </ExternalLink>
    )
  },
  youtube(props) {
    return (
      <ExternalLink
        hoverColor="#fff"
        href="https://www.youtube.com/user/bangtoven"
        {...props}
      >
        <YouTubeIcon size={32} />
      </ExternalLink>
    )
  }
}

export function SocialButton({ type, ...rest }) {
  const Type = Types[type]
  return (
    <Container {...rest}>
      <Type {...rest} />
    </Container>
  )
}

const SocialContainer = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  align-items: center;
  justify-content: space-between;
  width: ${props => props.width || 'auto'};
  .button {
    margin: ${rhythm(1 / 3)} 0;
  }
`

export default function Social(props) {
  return (
    <SocialContainer {...props}>
      <SocialButton className="button" type="linkedin" {...props} />
      <SocialButton className="button" type="git" {...props} />
      <SocialButton className="button" type="youtube" {...props} />
      <SocialButton className="button" type="instagram" {...props} />
      <SocialButton className="button" type="mail" {...props} />
    </SocialContainer>
  )
}
