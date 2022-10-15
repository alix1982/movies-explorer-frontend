import React from 'react';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function PopupWithForm (props) {

  function onPopupWithFormClick () {props.onClickPopupWithForm(props.name)}
  
  return(
    <section>
      <form className="form" name={props.name} type="submit" noValidate >
        <h2 className={`form__heading form${props.auth}__heading`}>{props.title}</h2>
        {props.children}
        <button className={`form__save form${props.auth}__save form${props.name}__save`}>{props.textButtonSave}</button>
        <div className="form__buttonOption">
          <p className="form__text">{props.text}</p>
          <button className={`form__option form${props.auth}__option`} onClick={onPopupWithFormClick}>
            {props.textButtonOption}
          </button>
        </div>
      </form>
    </section>
  )
}

export default PopupWithForm