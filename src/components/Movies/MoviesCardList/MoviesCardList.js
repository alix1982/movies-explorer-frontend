import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList (props) {
  // let quantityCards = 8;
  // if (window.screen.width >= 800) {quantityCards = 16};
  // if (window.screen.width <= 400) {quantityCards = 5};
  // const [isQuantityCards, setIsQuantityCards] = useState(quantityCards);
  // useEffect(()=> {
  //   function onQuantityCards () { 
  //     if (window.screen.width > 800) {setIsQuantityCards(16)};
  //     if (window.screen.width <= 800 && window.screen.width > 400) {setIsQuantityCards(8)};
  //     if (window.screen.width <= 400) {setIsQuantityCards(5)};
  //   };
  //   window.onresize = onQuantityCards;
  //   // window.addEventListener('resize', onQuantityCards())
  //   // return () => {window.onresize = onQuantityCards};
  // })
  // function handleOnClickButtonMore () {
  //   if (window.screen.width > 800) {setIsQuantityCards(isQuantityCards+4)};
  //   if (window.screen.width <= 800 && window.screen.width > 400) {setIsQuantityCards(isQuantityCards+2)};
  //   if (window.screen.width <= 400) {setIsQuantityCards(isQuantityCards+2)};
  // }
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__gallery">
        {props.onCards.map ((card, index) => {
          if (index >= props.isQuantityCards) {return;}
          return (
            <MoviesCard
              // user= {userContext}
              card = {card}
              // onSelectedCard={props.onSelectedCard}
              // onCardLike = {props.onCardLike}
              // onCardDelete = {props.onCardDelete}
              key={card.movieId}
            />
          )})
        }
      </ul>
      <button className="moviesCardList__more" onClick={props.handleOnClickButtonMore}>Ещё</button>
    </section>
  )
}

export default MoviesCardList

{/* <div>
  <button onClick={props.onClick} className="header__button_">{props.button}</button>
  <button onClick={props.onClick} className="header__button">{props.button}</button>
</div> */}