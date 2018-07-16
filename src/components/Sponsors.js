import React from "react"
import JamesPic from "../assets/james.jpg"
import styled from "styled-components"
import Paragraph from "./Paragraph"
import UnorderedList from "./UnorderedList"


export default ({ className }) => (
  <div className={className}>
    <Paragraph>We're looking for sponsors for the following things:</Paragraph>
    <UnorderedList>
      <li>A coach from Sydney Central to Camp Wombaroo</li>
      <li>Diversity &amp; student tickets</li>
      <li>T-Shirts and/or stickers</li>
      <li>Coffee</li>
      <li>Opening BBQ</li>
      <li>Closing BBQ</li>
      <li>Extra special snacks!</li>
    </UnorderedList>
    <Paragraph>
      Events like Elixir Camp are not possible without sponsorship. We rely on the
      support of amazing and generous sponsors to make it possible!
    </Paragraph>
    <Paragraph>
      Sponsors will have their logo prominently displayed on this page and
      will recieve shout-outs from the official Elixir Camp Twitter account,
      and Elixir Camp correspondence and will be announced during the opening
      and closing of the camp itself.
    </Paragraph>
    <Paragraph>
      Please contact <a href="mailto:james@alembic.com.au">
        james@alembic.com.au
      </a> if your company can help.
    </Paragraph>
  </div>
)

