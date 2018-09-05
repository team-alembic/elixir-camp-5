import React from "react"
import Paragraph from "../components/Paragraph"
import Header1 from "../components/Header1"
import Header2 from "../components/Header2"
import UnorderedList from "../components/UnorderedList"
import styled from "styled-components"
import { Link } from "react-static"


const DiversityAndInclusion = ({ className }) => (
  <article className={className}>
    <Header1>Diversity and Inclusion</Header1>

    <Paragraph>
      We are striving to improve the diversity and inclusion of not just the Elixir community but the tech community as a whole in Australia. As such we have a <Link to="/code-of-conduct">code of conduct</Link> that all camp attendees must follow. We are also developing a transparent process for dealing with violations of this code of conduct. Below we outline some of our current initiatives. If you have any feedback or concerns please feel free to reach out to cath@bitgirl101.com.
    </Paragraph>

    <Header2>Ticketing</Header2>

    <Paragraph>
      Thank you to our generous sponsors who are subsidising tickets for people who may not have been able to attend otherwise. These tickets will be available via our ticketing platform at $90 per person, on a first come first served basis. If you would like to receive a notification when we release our subsidised ticket, please sign up to our waitlist <a href="https://mailchi.mp/da872322eb46/elixir-camp-2018-dandi-ticket-waitlist">here</a>. 
    </Paragraph>

    <Header2>Accessibility</Header2>

    <Paragraph>
      Camp Wombaroo offers accessible accommodation. If you have accessibility concerns or would like to request accessible accommodation and transportation for the trip, please email james@alembic.com.au.
    </Paragraph>

    <Header2>Prayer Room/Quiet Space</Header2>

    <Paragraph>
      For those who wish to engage in religious activities over the course of the weekend, there will be a prayer space available to you. This space will also be open for people who wish to work in a quiet calm environment.
    </Paragraph>

    <Header2>Gender Diversity</Header2>

    <Paragraph>
      There will be designated all female-identifying, and male-identifying cabins, the rest of the accommodations will be on a first come first served basis. If you have any concerns, please feel free to reach out to either cath@bitgirl101.com or james@alembic.com.au.
    </Paragraph>

    <Header2>Additional Information and Support</Header2>

    <Paragraph>
      If you have any concerns regarding diversity and inclusion at Elixir Camp or feel as though you may be unable to attend due to a lack of support, please feel free to reach out to cath@bitgirl101.com to discuss what additional support we may be able to provide.
    </Paragraph>

  </article>
)

export default styled(DiversityAndInclusion)`
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 0;
`
