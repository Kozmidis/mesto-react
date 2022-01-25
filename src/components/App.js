import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditPopupOpen, setEditPopupOpen] = React.useState(false);
  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isAddPopupOpen, setAddPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditPopupOpen(true);
  }

  function handleAvatarProfileClick() {
    setAvatarPopupOpen(true);
  }

  function handleAddProfileClick() {
    setAddPopupOpen(true);
  }

  function handleImageClick(item) {
    setSelectedCard(item);
  }

  function closeAllPopups() {
    setAvatarPopupOpen(false);
    setAddPopupOpen(false);
    setEditPopupOpen(false);
    setSelectedCard({});
  }

  function closeOverlayPopup(evt) {
    if (evt.target.classList.contains("popup")) {
      closeAllPopups();
    }
  }

  return (
    <>
      <Header />
      <Main
        handleEditProfileClick={handleEditProfileClick}
        handleAddProfileClick={handleAddProfileClick}
        handleAvatarProfileClick={handleAvatarProfileClick}
        handleImageClick={handleImageClick}
      />
      <Footer />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        handleClickClose={closeOverlayPopup}
      />

      <PopupWithForm
        isOpen={isEditPopupOpen}
        name={"popup__edit"}
        title={"Редактировать профиль"}
        buttonText={"Сохранить"}
        onClose={closeAllPopups}
        handleClickClose={closeOverlayPopup}
      >
        <input
          id="user"
          form="formEdit"
          type="text"
          className="popup__form-input popup__form-input_input_name"
          name="name"
          placeholder="Введите имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__form-input-error user-error" />
        <input
          id="userjob"
          form="formEdit"
          type="text"
          className="popup__form-input popup__form-input_input_job"
          name="about"
          placeholder="Расскажите о себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__form-input-error userjob-error" />
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPopupOpen}
        name={"popup__add"}
        title={"Новое место"}
        buttonText={"Создать"}
        onClose={closeAllPopups}
        handleClickClose={closeOverlayPopup}
      >
        <input
          id="place"
          form="formAdd"
          type="text"
          className="popup__form-input popup__form-input_input_place"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__form-input-error place-error"></span>
        <input
          type="url"
          id="image"
          form="formAdd"
          className="popup__form-input popup__form-input_input_image"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__form-input-error image-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAvatarPopupOpen}
        name={"popup__avatar"}
        title={"Обновить аватар"}
        buttonText={"Сохранить"}
        onClose={closeAllPopups}
        handleClickClose={closeOverlayPopup}
      >
        <input
          type="url"
          id="avatar"
          form="formAvatar"
          className="popup__form-input popup__form-input_input_avatar"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__form-input-error avatar-error"></span>
      </PopupWithForm>
    </>
  );
}

export default App;
