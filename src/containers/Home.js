import React from "react"
import Paragraph from "../components/Paragraph"
import Header1 from "../components/Header1"
import Header2 from "../components/Header2"
import IconHeader from "../components/IconHeader"
import Calendar from "../components/icons/Calendar"
import UnorderedList from "../components/UnorderedList"
import BuyTicketsButton from "../components/BuyTicketsButton"
import Map from "../components/Map"
import TalkList from "../components/TalkList"
import Organisers from "../components/Organisers"
import styled from "styled-components"
import { Link } from "react-static"

const PageWrapper = styled.div`
  padding-bottom: 150px;
`

const PageTitle = Header1.extend`
  color: #fff;
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
  background: #7250a1 url("https://user-images.githubusercontent.com/4101096/42732208-a32b254a-884f-11e8-9e3a-45120ba00d89.jpg") bottom center no-repeat;
  background-size: cover;
`

const LeftColumn = styled.div`
  width: 58%;
  float: left;
  padding-right: 50px;
`

const RightColumn = styled.div`
  width: 42%;
  max-width: 357px;
  float: right;
  position: relative;
  top: -320px;
`

const Home = () => (
  <PageWrapper>
    <HeroWrapper>
      <WidthWrapper>
        <PageTitle>Elixir Camp 4</PageTitle>
        <IconHeader text="October 26th - 29th, 2018" />
        <IconHeader text="Camp Wombaroo" subText="(near Mittagong, Sydney)" />
      </WidthWrapper>
    </HeroWrapper>

    <WidthWrapper>
      <LeftColumn>
        <Paragraph>
          ElixirCamp is a place for people interested in Elixir, Erlang and
          related technologies to gather, network, share ideas and generally
          have a great time.
        </Paragraph>

        <Paragraph>
          While there's a general focus on Elixir developers, techy people of
          any background are encouraged to attend.
        </Paragraph>

        <Header2>You should come to Elixir Camp if:</Header2>

        <UnorderedList>
          <li>You like Elixir/Erlang</li>
          <li>
            You have limited knowledge of Elixir, but you want to change that
          </li>
          <li>
            You're into building high speed, fault tolerant, distributed
            applications
          </li>
          <li>
            You've got specialist knowledge and you'd like to share with iother
            enthusiasts
          </li>
          <li>You're interested in web technologies</li>
          <li>You've got a weekend project you really want to work on</li>
          <li>
            You'll abide by our <Link to="/coc">code of conduct</Link>
          </li>
        </UnorderedList>

        <Header2>Food and Beverages</Header2>

        <Paragraph>
          ElixirCamp will supply meals and snacks during the weekend, as well as
          tea, coffee and soft drinks.
        </Paragraph>

        <Paragraph>
          Alcoholic beverages are not included in the ticket price, please
          purchase any beverages you'd like to bring prior to boarding the bus.
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
            Download any packages, libraries and software you might want to use
            on a camp project. It's best to be prepared
          </li>
          <li>Any snacks you might like to bring along</li>
          <li>
            Games to play with others. Werewolf, Avalon, Cards Against Humanity,
            Flux and Poker have all featured at previous camps
          </li>
        </UnorderedList>
      </LeftColumn>

      <RightColumn>
        <BuyTicketsButton href="https://google.com">
          Buy Tickets!
        </BuyTicketsButton>

        <Map />

        <Header2>Talks &amp; Education</Header2>

        <TalkList
          talks={[
            {
              avatarImageUrl:
                "https://avatars1.githubusercontent.com/u/9307?s=460&v=4",
              authorFullName: "Josh Price",
              title: "Why Elixir?",
            },
            {
              avatarImageUrl:
                "https://avatars1.githubusercontent.com/u/9307?s=460&v=4",
              authorFullName: "Josh Price",
              title: "Why Elixir?",
            },
            {
              avatarImageUrl:
                "https://avatars1.githubusercontent.com/u/9307?s=460&v=4",
              authorFullName: "Josh Price",
              title: "Why Elixir?",
            },
            {
              avatarImageUrl:
                "https://avatars1.githubusercontent.com/u/9307?s=460&v=4",
              authorFullName: "Josh Price",
              title: "Why Elixir?",
            },
          ]}
        />

        <Header2>Organisers</Header2>
        <Organisers />

        <Header2>Sponsors</Header2>
        <p>
          Interested in sponsoring?<br />
          <a href="mailto:james@alembic.com.au">Email james@alembic.com.au</a>
        </p>
      </RightColumn>

      <br clear="all" />
    </WidthWrapper>
  </PageWrapper>
)

export default Home
