import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Question from '../assets/question.png'

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

const ContactInfo = styled.p`
  font-size: 12px;
`

const PlaceholderTalkListItem = ({ className }) => (
  <div className={className}>
    <Avatar src={Question} alt="This could be you!" />

    <div>
      <Title>Submit a talk proposal! 🔊</Title>
      <ContactInfo>
        Send submissions to{' '}
        <a href="mailto:james@alembic.com.au">james@alembic.com.au</a>
      </ContactInfo>
    </div>
  </div>
)

export default styled(PlaceholderTalkListItem)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: #fbfbfb;

  &:not(:last-child) {
    border-bottom: solid 2px #f2f2f2;
  }
`
