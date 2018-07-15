import React from "react"
import PropTypes from "prop-types"
import TalkListItem from "./TalkListItem"
import styled from "styled-components"

const TalkList = ({ className, talks }) => (
  <div className={className}>
    {talks.map((talk, index) => <TalkListItem key={index} talk={talk} />)}
  </div>
)

TalkList.propTypes = {
  talks: PropTypes.array.isRequired,
}

export default styled(TalkList)`
  border: solid 2px #f2f2f2;
  border-radius: 5px;
`
