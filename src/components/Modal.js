import React from "react"
import styled from "styled-components"

const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
`

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  top: 10vh;
  border-radius: 10px;
  background: #fff;
`

const Modal = ({ children }) => (
  <Overlay>
    <Content>{children}</Content>
  </Overlay>
)

export default Modal
