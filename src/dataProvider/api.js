class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._header = headers;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  // PATCH LIKE
  updateCard(cardId, like) {
    return fetch(`${this._baseUrl}/updateCard/${cardId}`, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({ like }),
    }).then(this._handleServerResponse);
  }

  // DELETE CARD (YA CORREGIDO)
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/deleteCard/${cardId}`, {
      method: "DELETE",
      headers: this._header,
    }).then(this._handleServerResponse);
  }

  // GET ALL CARDS
  getAllCards() {
    return fetch(`${this._baseUrl}/getAllCards`, {
      headers: this._header,
    }).then(this._handleServerResponse);
  }
}

const api = new Api({
  baseUrl: "https://apy-9a-ory-1p.onrender.com",
  headers: {
    "content-Type": "application/json",
  },
});

export default api;
