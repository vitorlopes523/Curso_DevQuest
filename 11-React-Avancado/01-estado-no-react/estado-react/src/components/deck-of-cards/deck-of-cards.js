import { useState, useEffect } from 'react'

async function createDeck() {
  const response = await fetch(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  )
  const deck = await response.json()
  return deck.deck_id
}

async function getCards(deckId) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
  )
  return await response.json()
}

const DeckOfCards = () => {
  const [deck, setDeck] = useState({
    cards: []
  })

  useEffect(() => {
    const fetchData = async () => {
      const deckId = await createDeck()
      const data = await getCards(deckId)

      setDeck({
        cards: data.cards
      })
    }
    fetchData()
  }, [])

  return (
    <section>
      <ul>
        {deck.cards.map((card, index) => {
          return (
            <li key={index}>
              <img src={card.image} alt={card.value} />
            </li>
          )
        })}
      </ul>
    </section>
  )
  // constructor() {
  //     super()
  //     this.state = {
  //       cards: []
  //     }
  // }

  // async componentDidMount() {
  //   const deckId = await createDeck()
  //   const data = await getCards(deckId)

  //   this.setState({
  //     cards: data.cards
  //   })
  // }

  // render() {
  //   return (
  //       <section>
  //           <ul>
  //               {
  //                 this.state.cards.map((card, index) => {
  //                   return (
  //                     <li key={index}>
  //                         <img src={card.image} alt={card.value} />
  //                     </li>
  //                   )
  //                 })
  //               }
  //           </ul>
  //       </section>
  //   )
  // }
}

export default DeckOfCards
