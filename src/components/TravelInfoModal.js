import React from "react"
import Modal from "./Modal"
import Plane from "./icons/Plane"
import Train from "./icons/Train"
import Bus from "./icons/Bus"
import styled from "styled-components"

const Header = styled.h1`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  padding: 20px;
  border-bottom: solid 1px #d8d8d8;
`

const Milestones = styled.ul`
  width: 100%;
  display: flex;
  padding: 65px 50px 30px;
  list-style: none;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`

const Milestone = styled.li`
  flex-basis: 0;
  flex-grow: 1;
  @media only screen and (max-width: 640px) {
    margin-bottom: 35px;
  }

  &:not(:last-child) {
    margin-right: 45px;
  }
`

const MilestoneHeader = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  padding-top: 15px;
`

const MilestoneText = styled.p`
  font-size: 16px;
`

const ExtraContent = styled.p`
  font-size: 16px;
  padding: 20px;
  text-align: center;
  border-top: solid 1px #d8d8d8;
`

const TravelInfoModel = ({ className, onCloseClicked }) => (
  <Modal onCloseClicked={onCloseClicked}>
    <Header>Travel Information</Header>

    <Milestones>
      <Milestone>
        <Bus />
        <MilestoneHeader>Journey to Elixir Camp</MilestoneHeader>
        <MilestoneText>
          The bus will depart Sydney Central at 2:00pm sharp and will pick up
          at the Sydney Kingsford Smith airport (domestic terminal) at approximately
          2:30pm.

          <p>On the way to Camp Wombaroo there will be a stop to optionally purchase alcohol and snacks.</p>
        </MilestoneText>
      </Milestone>

      <Milestone>
        <Bus />
        <MilestoneHeader>Journey from Elixir Camp</MilestoneHeader>
        <MilestoneText>
          The shuttle bus will depart Camp Wombaroo no later than 10am to drop
          off at Sydney Kingsford Smith airport (domestic) by approximately 12:30pm. The
          bus will continue to Sydney Central station for a drop off approximately
          1:00pm.
  
         <p>Please allow ample time for delays, epsecially if you're flying</p>.
        </MilestoneText>
      </Milestone>
    </Milestones>

    <ExtraContent>NOTE: more detailed instructions will be provided in the coming weeks.</ExtraContent>
  </Modal>
)

export default TravelInfoModel
