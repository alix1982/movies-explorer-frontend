import {useEffect} from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import FieldForm from '../FieldForm/FieldForm.js';

function Login (props) {
  return(
    <PopupWithForm  name="Login" title="Рады видеть!" text="Ещё не зарегистрированы?" auth="Auth"
      textButtonSave="Войти" textButtonOption="Регистрация" onClickPopupWithForm={props.onClickPopupWithForm}
      // buttonText={props.onTextButton}
      // isValid={isValid}
      // isOpen = {props.isOpen}
      // onClose = {props.onClose}
      // onCloseOverlay = {props.onCloseOverlay}
      // onSubmit = {handleOnSubmit}
    >
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

export default Login