import React from 'react';
import search from '../../../images/buttonSearch.svg';

function SearchForm (props) {
  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <fieldset className="searchForm__fildSearch">
          <input className="searchForm__inputText" placeholder="Фильм"/>
          <button className="searchForm__buttonSearch"></button>
        </fieldset>
        <label htmlFor="searchFormCheckbox" className="searchForm__switch">
          <p className="searchForm__textCheckbox">Короткометражки</p>
          <input className="searchForm__switchCheckbox" id="searchFormCheckbox" type="checkbox"/>
          <span className="searchForm__imgCheckbox"></span>
        </label>
      </form>
      <div className="searchForm__line"></div>
    </section>
  )
}

export default SearchForm
