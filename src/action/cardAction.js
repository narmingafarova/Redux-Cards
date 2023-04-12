import database from '../firebase/firebaseConfig';

export const addCard = (card) => ({
  type: "ADD_CARD",
  card
})

export const addCardToDatabase = (cardData = {}) => {
  return (dispatch) => {
    const { title = '', desc = '', photo = '' } = cardData;
    const card = { title, desc, photo};

    database.ref("cards").push(card).then((res) => {
      dispatch(addCard({
        id: res.key,
        ...card
      }))
    })
  }
}

export const editCard = (id, update) => ({
  type: "EDIT_CARD",
  id,
  update,
});

export const editCardFromDatabase = (id, updates) => {
  return (dispatch) => {
    return database.ref(`cards/${id}`).update(updates).then(() => {
      dispatch(editCard(id, updates));
    })
  }
}

export const removeCard = ({ id }) => ({
  type: "REMOVE_CARD",
  id,
});

export const removeCardFromDatabase = (id) => {
  return (dispatch) => {
    return database.ref(`cards/${id}`).remove().then(() => {
      dispatch(removeCard(id));
    })
  }
}

export const setCards = (cards) => ({
  type: "SET_CARDS",
  cards
})

export const getCardsFromDatabase = () => {
  return (dispatch) => {
    return database.ref("cards").once("value").then((snapshot) => {
      const cards = [];

      snapshot.forEach((card) => {
        cards.push({
          id: card.key,
          ...card.val()
        })
      })

      dispatch(setCards(cards));
    })
  }
}