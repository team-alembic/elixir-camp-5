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
        <Train />
        <MilestoneHeader>Journey to Elixir Camp</MilestoneHeader>
        <MilestoneText>
          Attendees should catch a train from Sydney Central to Mittagong.
          A shuttle bus will depart Mittangong at 3:30pm sharp to take everyone the rest
          of the way to Camp Wombaroo.
          <p>On the way to Camp Wombaroo there will be a stop to optionally
             purchase alcohol and snacks.</p>
          <p>Note: if you're planning on flying into Sydney, catch a train to Sydney Central
             and make sure you allow ample time for your journey by train to Mittagong.</p>
        </MilestoneText>
      </Milestone>

      <Milestone>
        <Train />
        <MilestoneHeader>Journey from Elixir Camp</MilestoneHeader>
        <MilestoneText>
          The shuttle bus will depart Camp Wombaroo no later than 9am to drop
          off at Mittagong station where campers should make their way back to Sydney Central by train.
  
         <p>Please allow ample time for delays, epsecially if you're flying.</p>
        </MilestoneText>
      </Milestone>
    </Milestones>

    <ExtraContent>NOTE: more detailed instructions will be provided in the coming weeks.</ExtraContent>
  </Modal>
)

export default TravelInfoModel
