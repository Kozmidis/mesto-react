import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

export default function Main({
  handleEditProfileClick,
  handleAddProfileClick,
  handleAvatarProfileClick,
  handleImageClick,
}) {
  const [userName, setUserName] = React.useState(" ");
  const [userDescription, setUserDescription] = React.useState(" ");
  const [userAvatar, setUserAvatar] = React.useState(" ");
  const [cards, setUserCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserProfile(), api.getUserCards()])
      .then(([userData, userCard]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        setUserCards(
          userCard.map((item) => ({
            name: item.name,
            image: item.link,
            alt: item.name,
            likes: item.likes,
            id: item._id,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__main">
          <div className="profile__avatar-container">
            <div
              onClick={handleAvatarProfileClick}
              className="profile__avatar-overlay"
            ></div>
            <img
              className="profile__main-avatar"
              src={userAvatar}
              alt="аватар"
            />
          </div>

          <div className="profile__edit-panel">
            <div className="profile__main-info">
              <h1 className="profile__name">{userName}</h1>

              <p className="profile__about-me">{userDescription}</p>
            </div>
            <button
              onClick={handleEditProfileClick}
              type="button"
              className="profile__redact"
            ></button>
          </div>

          <button
            onClick={handleAddProfileClick}
            type="button"
            className="profile__add-button"
          ></button>
        </div>
      </section>

      <section className="photos">
        <div className="template-photos" id="template-photos">
          <div className="photos__cards">
            {cards.map((item) => (
              <Card
                key={item.id}
                card={item}
                handleImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
