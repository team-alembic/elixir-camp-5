import React, { PureComponent } from "react"
import Paragraph from "../components/Paragraph"
import Header1 from "../components/Header1"
import Header2 from "../components/Header2"
import IconHeader from "../components/IconHeader"
import Calendar from "../components/icons/Calendar"
import Marker from "../components/icons/Marker"
import Ticket from "../components/icons/Ticket"
import SmallTrain from "../components/icons/SmallTrain"
import UnorderedList from "../components/UnorderedList"
import PrettyUnorderedList from "../components/PrettyUnorderedList"
import BuyTicketsButton from "../components/BuyTicketsButton"
import Map from "../components/Map"
import TalkList from "../components/TalkList"
import Organisers from "../components/Organisers"
import Sponsors from "../components/Sponsors"
import SponsorList from "../components/SponsorList"
import PrimaryFooter from "../components/PrimaryFooter"
import MobileOnly from "../components/MobileOnly"
import styled from "styled-components"
import { Link } from "react-static"
import Jeff from "../assets/jeff-avatar.png"
import Petch from "../assets/petch_7_med.jpg"
import Cath from "../assets/cath.jpg"
import Brenton from "../assets/brenton.png"

const PageWrapper = styled.div`
  padding-bottom: 150px;
`

const PageTitle = Header1.extend`
  color: #fff;

  @media only screen and (max-width: 641px) {
    font-size: 32px;
  }
`

const WidthWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
`

// prettier-ignore
const HeroWrapper = styled.div`
  height: 360px;
  color: #fff;
  padding: 50px 20px;
  margin-bottom: 50px;
  background: #7250a1 url("https://user-images.githubusercontent.com/4101096/42745866-8b03fa60-8907-11e8-806c-6621ea61cfe0.jpg") center no-repeat;
  background-size: cover;

  @media only screen and (max-width: 640px) {
    height: auto;
    padding-bottom: 20px;
  }
`

const LeftColumn = styled.div`
  width: 58%;
  float: left;
  padding-right: 50px;

  strong {
    text-decoration: underline;
  }

  @media only screen and (max-width: 640px) {
    float: none;
    width: 100%;
    padding-right: 0;
  }
`

const RightColumn = styled.div`
  width: 42%;
  max-width: 357px;
  float: right;
  position: relative;
  top: -320px;

  @media only screen and (max-width: 640px) {
    float: none;
    width: 100%;
    padding-top: 40px;
    top: 0;
  }
`

class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      showTravelInformation: false,
    }
  }

  render() {
    return (
      <PageWrapper>
        <HeroWrapper>
          <WidthWrapper>
            <PageTitle>Elixir Camp 4</PageTitle>

            <IconHeader
              IconComponent={Calendar}
              text="October 25th - 28th, 2019"
            />

            <IconHeader
              IconComponent={Marker}
              text="Camp Wombaroo"
              subText="(near Mittagong, Sydney)"
            />

            <MobileOnly>
              <BuyTicketsButton />
            </MobileOnly>
          </WidthWrapper>
        </HeroWrapper>

        <WidthWrapper>
          <LeftColumn>
            <Paragraph>
              Elixir Camp is a place for people interested in Elixir, Erlang and
              related technologies to gather, network, share ideas and generally
              have a great time.
            </Paragraph>

            <Header2>Diversity and Inclusion</Header2>

            <Paragraph>
              While there's a general focus on Elixir developers, people of any
              background are encouraged to attend. We are committed to creating
              an open and inclusive community and as such have started
              developing a series of policies and initiatives that you can read
              more about <Link to="/DiversityAndInclusion">here</Link>.
            </Paragraph>

            <Header2>You should come to Elixir Camp if:</Header2>

            <PrettyUnorderedList>
              <li>You like Elixir/Erlang</li>
              <li>
                You have limited knowledge of Elixir, but you want to change
                that
              </li>
              <li>
                You're into building high speed, fault tolerant, distributed
                applications
              </li>
              <li>
                You've got specialist knowledge and you'd like to share with
                other enthusiasts
              </li>
              <li>You're interested in web technologies</li>
              <li>You've got a weekend project you really want to work on</li>
              <li>
                You'll abide by our&nbsp;<Link to="/code-of-conduct">
                  code of conduct
                </Link>
              </li>
            </PrettyUnorderedList>

            <Header2>Food and Beverages</Header2>

            <Paragraph>
              Elixir Camp will supply meals and snacks during the weekend, as
              well as tea, coffee and soft drinks.
            </Paragraph>

            <Paragraph>
              Alcoholic beverages are not included in the ticket price, please
              purchase any beverages you'd like to bring prior to boarding the
              bus.
            </Paragraph>

            <Paragraph>
              Please bring along any extra snacks you would like.
            </Paragraph>

            <Header2>Essentials to Pack</Header2>

            <UnorderedList>
              <li>A sleeping bag or the like</li>
              <li>A pillow case</li>
              <li>A towel (or two)</li>
              <li>Clothes for mild to cool weather</li>
              <li>Computer gear and chargers</li>
              <li>Toiletries for the weekend</li>
              <li>
                Download any packages, libraries and software you might want to
                use on a camp project. It's best to be prepared
              </li>
              <li>Any snacks you might like to bring along</li>
              <li>
                Games to play with others. Werewolf, Avalon, Cards Against
                Humanity, Flux and Poker have all featured at previous camps
              </li>
            </UnorderedList>

            <Header2>Getting to Elixir Camp on Friday 25th</Header2>

            <Paragraph>
              Attendees should catch a{" "}
              <strong>train from Sydney Central to Mittagong</strong>. A shuttle
              bus will depart{" "}
              <strong>from the North side of Mittangong at 4:30pm sharp</strong>{" "}
              to take everyone the rest of the way to Camp Wombaroo. See:{" "}
              <a href="https://transportnsw.info/routes/details/intercity-trains/shl/76SHL">
                train timetable
              </a>.
            </Paragraph>
            <Paragraph>
              Please note that this is an hour later than the originally
              scheduled. If you find yourself in Mittagong early, there are some
              cafes, shops and pubs in which to pleasantly pass the time :)
            </Paragraph>
            <Paragraph>
              If attendees would like to alcoholic beverages there is a Dan
              Murphy's in Mittagong. Just make sure you're back at the station
              in time to meet the bus!
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1645.0143292046296!2d150.44484392375517!3d-34.4514203964387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b13a3a7a63f4a49%3A0xf833f02e5e23bfe9!2sDan+Murphy&#39;s+Mittagong!5e0!3m2!1sen!2sau!4v1539319573110"
                width="600"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen
              />
            </Paragraph>
            <Paragraph>
              Note: if you're planning on flying into Sydney, catch a train to
              Sydney Central and make sure you{" "}
              <strong>allow ample time for your journey</strong> by train to
              Mittagong.
            </Paragraph>

            <Header2>Departing Elixir Camp on Monday 29th</Header2>

            <Paragraph>
              The shuttle bus will depart Camp Wombaroo{" "}
              <strong>no later than 9:30am</strong> to drop off at Mittagong
              station where campers should make their way back to Sydney Central
              by train. See:{" "}
              <a href="https://transportnsw.info/routes/details/intercity-trains/shl/76SHL">
                train timetable
              </a>.
            </Paragraph>

            <Paragraph>
              Please note that this is 30 minutes later than originally
              scheduled. If you were planning on making the 9:34am train to
              Sydney Central the next available service is 10:18am. If you
              absolutely must make the 9:34am train, then speak to James during
              the camp to arrange an early lift. We don't want any attendees
              missing flights!
            </Paragraph>

            <Paragraph>
              Please allow ample time for delays, epsecially if you're flying.
            </Paragraph>

            <Header2 id="sponsors">Sponsors</Header2>
            <Sponsors />
          </LeftColumn>

          <RightColumn>
            <BuyTicketsButton />

            <Map />

            <SponsorList />

            <Header2>Talks &amp; Education</Header2>

            <TalkList
              talks={[
                {
                  avatarImageUrl:
                    "https://avatars1.githubusercontent.com/u/9307?s=460&v=4",
                  authorFullName: "Josh Price",
                  title: "Why Elixir? 🤯",
                },
                {
                  avatarImageUrl:
                    "https://avatars1.githubusercontent.com/u/2769?s=460&v=4",
                  authorFullName: "James Sadler",
                  title: "Meta: How to run an Elixir Camp 💧⛺️",
                },
                {
                  avatarImageUrl:
                    "https://pbs.twimg.com/profile_images/580853399333126144/PQ6yms7K_400x400.jpg",
                  authorFullName: "Dan Draper",
                  title: "Cryptography in Elixir 🔑",
                },
                {
                  avatarImageUrl: Petch,
                  authorFullName: "Petra Gulicher",
                  title:
                    "Learning Elixir: Building a to-do app with Phoenix and React 🔥🐔",
                },
                {
                  avatarImageUrl: Jeff,
                  authorFullName: "Jeff Chan",
                  title: "Beginner’s Guide - Enum is your new best friend 🌀",
                },
                {
                  avatarImageUrl: "https://joshleeb.com/images/avatar@2x.png",
                  authorFullName: "Josh Leeb-du Toit",
                  title:
                    "Elixir with Rust for Incredible Performance and Safety 💨",
                },
                {
                  avatarImageUrl: Cath,
                  authorFullName: "Catherine Jones",
                  title: "Neurodiversity at work 🧠",
                },
                {
                  avatarImageUrl:
                    "https://pbs.twimg.com/profile_images/530324657086287873/uX6j-9UV_400x400.jpeg",
                  authorFullName: "Martin Stannard",
                  title: "Seeing Processes with Scenic 🏔",
                },
                {
                  avatarImageUrl: Brenton,
                  authorFullName: "Brenton Annan",
                  title: "Event Sourcing in Elixir, From Scratch 🚰",
                },
              ]}
            />

            <Header2>Organisers</Header2>
            <Organisers />
          </RightColumn>

          <br clear="all" />

          <PrimaryFooter />
        </WidthWrapper>
      </PageWrapper>
    )
  }
}

export default Home
