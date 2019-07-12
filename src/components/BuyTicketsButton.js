import React from "react"
import styled from "styled-components"
import Ticket from "./icons/Ticket"

const ButtonLink = styled.a`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 22px;
  width: 200px;
  height: 60px;
  padding: 0 18px 5px;
  margin-bottom: 40px;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background: #8765b5;

  @media only screen and (max-width: 640px) {
    font-size: 18px;
    width: 300px;
  }
`

export default function() {
  return (
    <ButtonLink href="https://ti.to/elixir-australia/elixir-camp-2019">
      <Ticket />
      Buy Tickets!
    </ButtonLink>
  )
}
