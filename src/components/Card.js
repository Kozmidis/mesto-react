export default function Card({ card, handleImageClick }) {
  function handleCard() {
    handleImageClick(card);
  }
  return (
    <div className="photos__card">
      <img
        src={card.image}
        alt={card.alt}
        className="photos__card-image"
        onClick={handleCard}
      />
      <div className="photos__info">
        <h2 className="photos__card-name">{card.name}</h2>
        <div className="photos__likebar">
          <button type="button" className="photos__card-like" />
          <p className="photos__card-like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="photos__remove-button" />
    </div>
  );
}
