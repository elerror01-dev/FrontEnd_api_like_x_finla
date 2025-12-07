import "./Card.css";

const Card = (props) => {
  const { card, handleDeleteCard, handleUpdateCard } = props;

  const imageSrc = card.link?.startsWith("http")
    ? card.link
    : "https://via.placeholder.com/400";

  return (
    <div className="card">
      <img className="card__image" src={imageSrc} alt={card.name} />

      <button
        aria-label="Remove place"
        className="card__delete-button"
        type="button"
        onClick={() => handleDeleteCard(card)}
      ></button>

      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>

        <button
          aria-label="Like place"
          className={
            card.like
              ? "card__like-button card__like-button_is-active"
              : "card__like-button"
          }
          type="button"
          onClick={() => handleUpdateCard(card)}
        ></button>
      </div>
    </div>
  );
};

export default Card;
