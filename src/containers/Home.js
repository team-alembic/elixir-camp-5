import React from "react"
import styled from "styled-components"

const WidthWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
`

const LeftColumn = styled.div`
  width: 58%;
  padding-right: 50px;
`

const RightColumn = styled.div`
  width: 42%;
  float: right;
`

const Home = () => (
  <WidthWrapper>
    <LeftColumn>
      <h1>Elixir Camp 4</h1>
      <p>October 26th - 29th, 2018</p>
      <p>
        Camp Wombaroo<br />(near Mittagong, Sydney)
      </p>

      <p>
        ElixirCamp is a place for people interested in Elixir, Erlang and
        related technologies to gather, network, share ideas and generally have
        a great time.
      </p>

      <p>
        While there's a general focus on Elixir developers, techy people of any
        background are encouraged to attend.
      </p>

      <h2>You should come to Elixir Camp if:</h2>
      <ul>
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
        <li>You'll abide by our code of conduct</li>
      </ul>

      <h2>Food and Beverages</h2>
      <p>
        ElixirCamp will supply meals and snacks during the weekend, as well as
        tea, coffee and soft drinks.
      </p>
      <p>
        Alcoholic beverages are not included in the ticket price, please
        purchase any beverages you'd like to bring prior to boarding the bus.
      </p>
      <p>Please bring along any extra snacks you would like.</p>

      <h2>Essentials to Pack</h2>
      <ul>
        <li>A sleeping bag or the like</li>
        <li>A pillow case</li>
        <li>A towel (or two)</li>
        <li>Clothes for mild to cool weather</li>
        <li>Computer gear and chargers</li>
        <li>Toiletries for the weekend</li>
        <li>
          Download any packages, libraries and software you might want to use on
          a camp project. It's best to be prepared
        </li>
        <li>Any snacks you might like to bring along</li>
        <li>
          Games to play with others. Werewolf, Avalon, Cards Against Humanity,
          Flux and Poker have all featured at previous camps
        </li>
      </ul>
    </LeftColumn>
  </WidthWrapper>
)

export default Home
