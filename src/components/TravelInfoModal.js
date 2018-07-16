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
  justify-content: center;
  padding: 65px 50px 30px;
  list-style: none;
`

const Milestone = styled.li`
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
        <Plane />
        <MilestoneHeader>Plane</MilestoneHeader>
        <MilestoneText>
          If you're flying in, make sure your plane arrives before 10am
        </MilestoneText>
      </Milestone>

      <Milestone>
        <Train />
        <MilestoneHeader>Train</MilestoneHeader>
        <MilestoneText>
          Take the train to Mittagong station, which is on the Foo line
        </MilestoneText>
      </Milestone>

      <Milestone>
        <Bus />
        <MilestoneHeader>Bus</MilestoneHeader>
        <MilestoneText>
          The shuttle bus will depart Mittagong station for the campground at
          1pm sharp
        </MilestoneText>
      </Milestone>
    </Milestones>

    <ExtraContent>Extra room here for more text and stuff</ExtraContent>
  </Modal>
)

export default TravelInfoModel
