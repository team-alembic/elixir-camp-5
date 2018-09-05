import React, { PureComponent } from "react"
import Paragraph from "../components/Paragraph"
import Header1 from "../components/Header1"
import Header2 from "../components/Header2"
import TravelInfoModal from "../components/TravelInfoModal"
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
import PrimaryFooter from "../components/PrimaryFooter"
import MobileOnly from "../components/MobileOnly"
import styled from "styled-components"
import { Link } from "react-static"

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

const ShowTravelInfoButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  text-decoration: underline;
  display: flex;
  justify-content: space-between;
  width: 220px;
  margin-top: 30px;
  align-items: center;
  cursor: pointer;
  color: #fff;
  outline: 0;
  border: 0;
  background: 0;

  @media only screen and (max-width: 640px) {
    margin-bottom: 30px;
  }
`

const LeftColumn = styled.div`
  width: 58%;
  float: left;
  padding-right: 50px;

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
        {this.state.showTravelInformation ? (
          <TravelInfoModal
            onCloseClicked={() =>
              this.setState({ showTravelInformation: false })
            }
          />
        ) : null}

        <HeroWrapper>
          <WidthWrapper>
            <PageTitle>Elixir Camp 4</PageTitle>

            <IconHeader
              IconComponent={Calendar}
              text="October 26th - 29th, 2018"
            />

            <IconHeader
              IconComponent={Marker}
              text="Camp Wombaroo"
              subText="(near Mittagong, Sydney)"
            />

            <ShowTravelInfoButton
              onClick={() => this.setState({ showTravelInformation: true })}>
              <SmallTrain />
              Show transport info!
            </ShowTravelInfoButton>

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
              While there's a general focus on Elixir developers, people
              of any background are encouraged to attend. We are committed to creating an open and inclusive community and as such have started developing a series of policies and initiatives that you can read more about <Link to="/DiversityAndInclusion">here</Link>.
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
                You'll abide by our&nbsp;<Link to="/code-of-conduct">code of conduct</Link>
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

            <Header2 id="sponsors">Sponsors</Header2>
            <Sponsors />
          </LeftColumn>

          <RightColumn>
            <BuyTicketsButton />

            <Map />

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
                  title: "All About Umbrella Applications ☂️",
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
