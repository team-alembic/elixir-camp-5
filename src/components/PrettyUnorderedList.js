import React from "react"
import Checkmark from "./icons/Checkmark"
import styled from "styled-components"

const ListItem = ({ className, children }) => (
  <li className={className}>
    <CheckmarkWrapper>
      <Checkmark />
    </CheckmarkWrapper>

    {children}
  </li>
)

const PrettyListItem = styled(ListItem)`
  display: flex;
  min-height: 25px;
`

const CheckmarkWrapper = styled.div`
  padding-top: 2px;
  margin-right: 10px;
`

const PrettyUnorderedList = ({ className, children }) => (
  <ul className={className}>
    {children.map((item, index) => (
      <PrettyListItem key={index}>{item.props.children}</PrettyListItem>
    ))}
  </ul>
)

export default styled(PrettyUnorderedList)`
  padding: 12px 0;
  margin-left: 15px;
  list-style: none;

  li {
    margin-bottom: 10px;
  }
`
