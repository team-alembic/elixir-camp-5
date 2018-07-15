import React from "react"
import JamesPic from "../assets/james.jpg"
import styled from "styled-components"

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`

const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 5px;
`

const Company = styled.p`
  font-size: 14px;
`

const Organisers = ({ className }) => (
  <div className={className}>
    <Avatar src={JamesPic} />
    <div>
      <Name>James Sadler</Name>
      <Company>Alembic Pty Ltd</Company>
    </div>
  </div>
)

export default styled(Organisers)`
  display: flex;
  align-items: center;
`