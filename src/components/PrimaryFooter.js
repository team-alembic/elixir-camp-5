import React from "react"
import styled from "styled-components"
import Paragraph from "../components/Paragraph"
import AboriginalFlag from "../components/icons/AboriginalFlag"

const CreditList = styled.ul`
  list-style: none;
`

const WidthWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
`

const LeftColumnFooter = styled.div`
  width: 50%;
  float: left;
  padding-right: 50px;

  @media only screen and (max-width: 640px) {
    float: none;
    width: 100%;
    padding-right: 0;
  }
`

const RightColumnFooter = styled.div`
  width: 50%;
  float: right;
  top: -320px;

  @media only screen and (max-width: 640px) {
    float: none;
    width: 100%;
    padding-top: 40px;
    top: 0;
  }
`


const LeftColumnNested = styled.div`
  width: 18%;
  float: left;
  padding-right: 50px;

  @media only screen and (max-width: 640px) {
    float: none;
    width: 100%;
    padding-right: 0;
  }
`

const RightColumnNested = styled.div`
  width: 82%;
  max-width: 357px;
  float: right;
  top: -320px;

  @media only screen and (max-width: 640px) {
    float: none;
    width: 100%;
    padding-top: 40px;
    top: 0;
  }
`


const PrimaryFooter = ({ className }) => (
  <footer className={className}>
    <WidthWrapper>
      <LeftColumnFooter>
        <CreditList>
          <li>
            Content by Martin Stannard, Garret Heinlen, Jo Cranford, Cath Jones &amp; James
            Sadler
          </li>

          <li>
            Code of conduct by Cath Jones, Suzie Price, Martin Stannard &amp; James
            Sadler
          </li>

          <li>
            <a
              href="https://thenounproject.com/search/?q=bus&i=110224"
              target="_blank">
              Bus by Hayden Kerrisk, NZ on The Noun Project
            </a>
          </li>

          <li>
            <a
              href="https://thenounproject.com/search/?q=marker&i=1629327"
              target="_blank">
              Marker by Dinosoft Labs, PK on The Noun Project
            </a>
          </li>

          <li>
            <a
              href="https://thenounproject.com/search/?q=ticket&i=1614521"
              target="_blank">
              Ticket by Three Six Five on The Noun Project
            </a>
          </li>

          <li>
            <a
              href="https://thenounproject.com/search/?q=calendar&i=1834413"
              target="_blank">
              Calendar by Tom Ingebretsen, US on The Noun Project
            </a>
          </li>

          <li>
            <a
              href="https://thenounproject.com/search/?q=plane&i=684674"
              target="_blank">
              Plane by David, US on The Noun Project
            </a>
          </li>

          <li>
            <a
              href="https://thenounproject.com/search/?q=checkmark&i=1379283"
              target="_blank">
              Checkmark by Logan on The Noun Project
            </a>
          </li>
        </CreditList>
      </LeftColumnFooter>
      <RightColumnFooter>
        <WidthWrapper>
          <LeftColumnNested>
            <AboriginalFlag />
          </LeftColumnNested>
          <RightColumnNested>
            <Paragraph>
            Elixir Camp will be held on the traditional lands of the Gandangran people of the Eora nation. We acknowledge that sovereignty was never ceded and pay our respects to elders past, present and future.
            </Paragraph>
          </RightColumnNested>
        </WidthWrapper>
      </RightColumnFooter>
    </WidthWrapper>
  </footer>
)

export default styled(PrimaryFooter)`
  margin-top: 50px;
  padding: 20px 0;
  border-top: solid 2px #f2f2f2;
`
