import React from 'react';
import {useEffect, useState} from 'react';

import film from '../../../images/film.png';

function Card (props) {

  const [isOnCardLike, setIsOnCardLike] = useState(false);
  // ((!props.card.owner) ? setIsOnCardLike(false) : setIsOnCardLike(true))

  const buttonLikeClassName = (`card__like ${isOnCardLike && 'card__likeActive'}`);
  
  function handleCardLike () {
    ((!isOnCardLike) ? setIsOnCardLike(true) : setIsOnCardLike(false));
    ((!props.card.owner) ? props.card.owner = "633490f552e1e44d60014077" : delete props.card.owner)
    console.log(props.card);
  }
  useEffect(()=>{
    ((!props.card.owner) ? setIsOnCardLike(false) : setIsOnCardLike(true));
  }, [isOnCardLike])
  return (
    <section className="card">
      <img src= {film} className="card_film" alt="Логотип"/>
      <div className="card__info">
       <p className="card__name">{props.card.nameRU}</p>
       <button className={buttonLikeClassName} type="button" onClick={handleCardLike}></button>
       {/* <label htmlFor="likeFilm" className="card__switch" onClick={handleCardLike(props.card)}>
          <input className="card__switchCheckbox" id="likeFilm" type="checkbox" />
          <span className="card__imgCheckbox" ></span>
        </label> */}
      </div>
      <div className="card__line"></div>
      <p className="card__time">{props.card.duration}</p>
    </section>
  )
}

export default Card