import React from 'react';
import { useState, useEffect } from 'react';
import search from '../../../images/buttonSearch.svg';

function SearchForm (props) {
  const [isSearchFormTextPlaceholder, setIsSearchFormTextPlaceholder] = useState(false);
  function disabledPlaceholder () {
    const input=document.querySelector('.searchForm__inputText')
    if (input.value) {
      setIsSearchFormTextPlaceholder(true);
    } else (setIsSearchFormTextPlaceholder(false))
  };
  
  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <fieldset className="searchForm__fildSearch">
          <input className="searchForm__inputText" name="serchFilm" onChange={disabledPlaceholder}/>
          <div className={`searchForm__placeholder ${isSearchFormTextPlaceholder && 'searchForm__placeholder_disable'}`}>
            <img src={search} className="searchForm__placeholderImg"/>
            <p className="searchForm__placaholderText">Фильм</p>
          </div>
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
