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
`

// NOTE: once tickets are on sale this will go away
const ButtonSpan = styled.span`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 22px;
  width: 350px;
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
`

export default function() {
  return (
    //<ButtonLink href="https://www.google.com">
    //  <Ticket/>
    //  Buy Tickets!
    //</ButtonLink>
    <ButtonSpan>
      <Ticket />
      Tickets on sale 20th July!
    </ButtonSpan>
  )
}
