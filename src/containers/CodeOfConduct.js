import React from "react"
import Paragraph from "../components/Paragraph"
import Header1 from "../components/Header1"
import UnorderedList from "../components/UnorderedList"
import styled from "styled-components"

const CodeOfConduct = ({ className }) => (
  <article className={className}>
    <Header1>Code of Conduct</Header1>

    <Paragraph>
      ElixirCamp is dedicated to providing a harassment-free conference
      experience for everyone, regardless of gender, gender identity and
      expression, sexual orientation, disability, physical appearance, body
      size, race, age or religion. We do not tolerate harassment of conference
      participants in any form. Sexual language and imagery is not appropriate
      for any conference venue, including talks. Conference participants
      violating these rules may be sanctioned or expelled from the conference
      without a refund at the discretion of the conference organizers.
    </Paragraph>

    <Paragraph>Harassment includes, but is not limited to:</Paragraph>

    <UnorderedList>
      <li>
        Verbal comments that reinforce social structures of domination related
        to gender, gender identity and expression, sexual orientation,
        disability, physical appearance, body size, race, age, religion.
      </li>
      <li>Sexual images in public spaces</li>
      <li>Deliberate intimidation, stalking, or following</li>
      <li>Harassing photography or recording</li>
      <li>Sustained disruption of talks or other events</li>
      <li>Inappropriate physical contact</li>
      <li>Unwelcome sexual attention</li>
      <li>Advocating for, or encouraging, any of the above behaviour</li>
    </UnorderedList>

    <Paragraph>
      Anyone violating these rules will be asked to leave at the discretion of the
      organisers.

      If you witness or are a victim of harassment or non-exclusion please contact
      the event organisers, who will introduce themselves at the start of the event.
      Our strong preference is that we address any issues as and when they
      happen. However, if you do not feel safe as and when an issue arises, you may
      contact an organiser via SMS or phone call. Phone numbers will be provided at
      the start of the event.
    </Paragraph>
  </article>
)

export default styled(CodeOfConduct)`
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 0;
`
