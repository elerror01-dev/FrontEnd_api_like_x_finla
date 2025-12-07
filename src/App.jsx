import { AppContext } from "./components/Context/AppContext";
import Header from "./components/Header/Header";
import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./dataProvider/api";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  // ⭐ Cargar tarjetas al iniciar
  useEffect(() => {
    (async () => {
      try {
        const data = await api.getAllCards();
        setCards(data);
      } catch (error) {
        console.error("Error getting Cards:", error);
      }
    })();
  }, []);

  // ⭐ Eliminar tarjeta
  async function handleDeleteCard(card) {
    try {
      await api.deleteCard(card._id);

      // quitar la card del estado
      setCards((prevCards) =>
        prevCards.filter((currentCard) => currentCard._id !== card._id)
      );

      console.log("Card eliminada:", card._id);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  }

  // ⭐ Actualizar like
  async function handleUpdateCard(card) {
    const likeFinal = !card.like;

    try {
      await api.updateCard(card._id, likeFinal);

      const nueva = { ...card, like: likeFinal };

      setCards((prev) =>
        prev.map((c) => (c._id === nueva._id ? nueva : c))
      );

      console.log("Like actualizado:", nueva);
    } catch (error) {
      console.error("Error updating card:", error);
    }
  }

  return (
    <AppContext.Provider value={{ cards, setCards }}>
      <div className="app">
        <div className="app__content">
          <Header />
          <Main
            cards={cards}
            handleDeleteCard={handleDeleteCard}
            handleUpdateCard={handleUpdateCard}
          />
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
