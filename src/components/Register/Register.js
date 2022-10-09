import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import FieldForm from '../FieldForm/FieldForm.js';

function Register (props) {


  return(
    <PopupWithForm  name="Register" title="Добро пожаловать!" text="Уже зарегистрированы?" auth="Auth"
      textButtonSave="Зарегистрироваться" textButtonOption="Войти" onClickPopupWithForm={props.onClickPopupWithForm}
      // buttonText={props.onTextButton}
      // isValid={isValid}
      // isOpen = {props.isOpen}
      // onClose = {props.onClose}
      // onCloseOverlay = {props.onCloseOverlay}
      // onSubmit = {handleOnSubmit}
    >
      <FieldForm
        formType="Auth" heading="Имя"
        type="text" inputName="name" placeholder="Александр" 
        textError="поле ошибок валидации"
      />
      <FieldForm
        formType="Auth" heading="E-mail"
        type="email" inputName="email" placeholder="pochta@yandex.ru"
        textError="поле ошибок валидации"
      />
      <FieldForm
        formType="Auth" heading="Пароль"
        type="password" inputName="password" placeholder="••••••••••••••"
        textError="поле ошибок валидации"
      />
    </PopupWithForm>
  )
}

export default Register