import React from 'react';
import search from '../../images/buttonSearch.svg';

function SearchForm (props) {
  // placeholder="&#128269; Фильм"

  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <fieldset className="searchForm__fildSearch">
          <img src={search} className="searchForm__placeholderImg" alt="поиск"/>
          <input className="searchForm__inputText" name="searchFilm" placeholder= "Фильм" required />
          <button className="searchForm__buttonSearch">Найти</button>
        </fieldset>
        <label htmlFor="searchFormCheckbox" className="searchForm__switch">
          <input className="searchForm__switchCheckbox" id="searchFormCheckbox" type="checkbox"/>
          <span className="searchForm__imgCheckbox"></span>
          <p className="searchForm__textCheckbox">Короткометражки</p>
        </label>
      </form>
      <div className="searchForm__line"></div>
    </section>
  )
}

export default SearchForm
