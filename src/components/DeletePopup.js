import React from "react";

function DeletePopup() {
  return (
    <div className="popup popup_type_delete">
      <div className="popup__window">
        <button type="button" className="popup__close-button"></button>
        <h3 className="popup__title">Вы уверены?</h3>
        <form
          name="edit-form"
          className="popup__form popup__form_delete"
          noValidate
        >
          <button type="submit" className="popup__save-button">
            Да
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeletePopup;
