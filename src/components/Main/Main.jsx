import "./Main.css";
import Profile from "./Profile/Profile";
import CardContainer from "./CardContainer/CardContainer";

const Main = (props) => {
  const { cards, handleDeleteCard, handleUpdateCard } = props; // <-- ahora sí lo recibes

  return (
    <main className="main">
      <section className="traveler">
        <Profile />
      </section>
      <section className="gallery">
        <CardContainer
          cards={cards}
          handleDeleteCard={handleDeleteCard} // <-- ahora sí lo reenvías
          handleUpdateCard={handleUpdateCard}
        />
      </section>
    </main>
  );
};

export default Main;
