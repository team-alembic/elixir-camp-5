import React from "react"
import styled from "styled-components"
import UnorderedList from "./UnorderedList"
import buildkiteLogo from "../assets/buildkite-logo-on-light-d83a7b7d.svg"
import alembicLogo from "../assets/alembic-logo-horizontal.svg"
import expert360Logo from "../assets/expert360_logo.svg"
import blackmillLogo from "../assets/blackmill-logo-black.svg"
import lookaheadLogo from "../assets/lookahead-logo.png"
import cultureAmpLogo from "../assets/culture-amp-logo.png"
import manningLogo from "../assets/Manninglogo_outline.png"
import Header2 from "../components/Header2"

const Sponsors = styled.div`
  a {
    display: block;
    margin-top: 20px;
    text-align: center;
    img {
      width: 100%;
    }
  }
`

export default ({ className }) => (
  <Sponsors className={className}>
    <Header2>Our sponsors</Header2>
    <a href="https://buildkite.com/">
      <img src={buildkiteLogo} />
    </a>
    <a href="https://blackmill.co">
      <img src={blackmillLogo} />
    </a>
    <a href="https://lookahead.com.au">
      <img src={lookaheadLogo} />
    </a>
    <a href="https://expert360.com">
      <img src={expert360Logo} />
    </a>
    <a href="https://alembic.com.au">
      <img
        src={alembicLogo}
        style={{ transform: "scale(1.1)", marginTop: "-20px" }}
      />
    </a>
    <a href="https://cultureamp.com">
      <img
        src={cultureAmpLogo}
        style={{ transform: "scale(1.1)", marginTop: "-20px" }}
      />
    </a>
  </Sponsors>
)
