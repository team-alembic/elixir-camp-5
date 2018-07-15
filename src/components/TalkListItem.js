import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`

const Title = styled.p`
  font-weight: 700;
  font-size: 14px;
`

const AuthorName = styled.p`
  font-size: 12px;
`

const TalkListItem = ({ className, talk }) => (
  <div className={className}>
    <Avatar src={talk.avatarImageUrl} alt={talk.authorFullName} />

    <div>
      <Title>{talk.title}</Title>
      <AuthorName>{talk.authorFullName}</AuthorName>
    </div>
  </div>
)

TalkListItem.propTypes = {
  talk: PropTypes.object.isRequired,
}

export default styled(TalkListItem)`
  display: flex;
  align-items: center;
  padding: 15px 20px;

  &:not(:last-child) {
    border-bottom: solid 2px #f2f2f2;
  }
`
