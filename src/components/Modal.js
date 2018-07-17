import React from "react"
import styled from "styled-components"

const Overlay = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 640px) {
    padding-top: 20px;
    top: 0;
  }
`

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  top: 10vh;

  @media only screen and (max-width: 640px) {
    top: 0;
  }
`

const Content = styled.div`
  border-radius: 10px;
  background: #fff;
`

const CloseButton = styled.button`
  font-size: 16px;
  border: none;
  color: #fff;
  margin: 0 0 25px auto;
  background: none;
  cursor: pointer;
  outline: 0;
`

const Modal = ({ children, onCloseClicked }) => (
  <Overlay>
    <Wrapper>
      <CloseButton onClick={onCloseClicked}>Close</CloseButton>
      <Content>{children}</Content>
    </Wrapper>
  </Overlay>
)

export default Modal
