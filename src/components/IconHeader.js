import React from "react"
import styled from "styled-components"

const Text = styled.h2`
  font-size: 26px;
  font-family: "Playfair Display", sans-serif;
  margin-left: 10px;
  color: #fff;
`

const SubText = styled.p`
  font-family: "Playfair Display", sans-serif;
  font-size: 20px;
  color: #fff;
  margin-top: 5px;
  padding-left: 5px;
`

const IconWrapper = styled.div`
  padding-top: 5px;
`

const IconHeader = ({ className, IconComponent, text, subText }) => (
  <div className={className}>
    <IconWrapper>
      <IconComponent />
    </IconWrapper>

    <div>
      <Text>{text}</Text>
      <SubText>{subText}</SubText>
    </div>
  </div>
)

export default styled(IconHeader)`
  display: flex;
`
