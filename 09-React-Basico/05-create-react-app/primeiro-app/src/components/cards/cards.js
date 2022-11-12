import Card from '../card/card'

const cardsTitle = ['Titulo card 1', 'Titulo card 2', 'Titulo card 3']

const showCardColor = (color) => {
  console.log(color)
}

const Cards = () => {
  return (
    <div>
      <h2>Meus cards</h2>

      <div>
         {
           cardsTitle.map((cardsTitle, index) => (
               <Card key={cardsTitle} showCardColor={showCardColor}>
                 <h3>{cardsTitle}</h3>
                 <p>esse é um texto do card 1</p>
               </Card>
           ))
         }

          <Card color='blue' showCardColor={showCardColor}>
            <h3>Card com fundo azul</h3>
            <p>esse é um texto do card 1</p>
          </Card>

      </div>
    </div>
  )
}

export default Cards
