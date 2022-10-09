import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import FieldForm from '../FieldForm/FieldForm.js';

function Profile (props) {
  return(
    <PopupWithForm  name="Profile" title="Привет, Александр!"
      textButtonSave="Редактировать" textButtonOption="Выйти из аккаунта" onClickPopupWithForm={props.onClickPopupWithForm}
      // buttonText={props.onTextButton}
      // isValid={isValid}
      // isOpen = {props.isOpen}
      // onClose = {props.onClose}
      // onCloseOverlay = {props.onCloseOverlay}
      // onSubmit = {handleOnSubmit}
    >
      <FieldForm
        formType="Profile" heading="Имя"
        type="text" inputName="name" placeholder="Александр" 
        textError="поле ошибок валидации"
      />
      <div className="formProfile__line"></div>
      <FieldForm
        formType="Profile" heading="E-mail"
        type="email" inputName="email" placeholder="pochta@yandex.ru"
        textError="поле ошибок валидации"
      />
    </PopupWithForm>
  )
}

export default Profile