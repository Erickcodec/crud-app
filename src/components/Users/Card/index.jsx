import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil, faGift } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./index.css";

export default function UserCard({
  value: user = {},
  remove = (user) => {},
  edit = (user) => {},
}) {
  const handleRemove = () => {
    remove(user);
  };

  const handleEdit = () => {
    edit(user);
  };

  return (
    <div className="card__wrapper">
      <header className="card__header">
        <h3 className="card__title">
          {user.first_name} {user.last_name}
        </h3>
      </header>
      <section className="card__content">
        <div className="card-ship">
          <span className="card-ship__label">correo</span>
          <span className="card-ship__text">{user.email}</span>
        </div>
        <div className="card-ship">
          <span className="card-ship__label">cumpleaños</span>
          <span className="card-ship__text">
            <FontAwesomeIcon icon={faGift} className="icon" />
            {user.birthday}
          </span>
        </div>
      </section>
      <footer className="card__footer">
        <div className="card__actions">
          <button className="card__delete" onClick={handleRemove}>
            <FontAwesomeIcon icon={faTrash} className="icon" />
          </button>
          <button className="card__edit" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPencil} className="icon" />
          </button>
        </div>
      </footer>
    </div>
  );
}
