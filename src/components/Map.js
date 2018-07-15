import React from "react"
import styled from "styled-components"

const Address = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #7250a1;
  min-height: 70px;
  padding: 25px;
`

const Map = ({ className }) => (
  <div className={className}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26339.615428124707!2d150.3128840384951!3d-34.38985738051552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b13bb8ba49d5659%3A0xb4284107746ae47d!2sWombaroo%2C+162+Black+Spring+Rd%2C+High+Range+NSW+2575!5e0!3m2!1sen!2sau!4v1531643689492"
      width="357"
      height="350"
      frameBorder="0"
      allowFullScreen
    />

    <Address>162 Black Spring Rd, High Range NSW 2575</Address>
  </div>
)

export default styled(Map)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
`
