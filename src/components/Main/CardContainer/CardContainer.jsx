import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = ({ cards, handleDeleteCard, handleUpdateCard }) => {
  console.log("Dentro de cards", cards);

  return (
    <div className="card-container">
      <ul className="card-container__list">
        {cards.map((card) => (
          <li key={card._id}>
            <Card
              card={card}
              handleDeleteCard={handleDeleteCard}
              handleUpdateCard={handleUpdateCard}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardContainer;
