import React, { Fragment } from "react"
import CathPic from "../assets/cath.jpg"
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

const Organiser = styled.div`
  margin-bottom: 20px;
`

const Organisers = ({ className }) => (
  <Fragment>
    <Organiser className={className}>
      <Avatar src={JamesPic} />
      <div>
        <Name>James Sadler</Name>
        <Company>
          <a href="https://alembic.com.au">Alembic</a>
        </Company>
      </div>
    </Organiser>
  </Fragment>
)

export default styled(Organisers)`
  display: flex;
  align-items: center;
`
