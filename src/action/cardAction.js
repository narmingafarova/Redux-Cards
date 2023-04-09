import { v4 as uuid } from "uuid";

export const addCard = ({ title, desc, info, photo, date, category, view }) => ({
  type: "ADD_CARD",
  card: {
    id: uuid(),
    title,
    desc,
    info,
    photo,
    date,
    category,
    view
  },
});

export const editCard = (id, update) => ({
  type: "EDIT_CARD",
  id,
  update,
});

export const removeCard = ({ id }) => ({
  type: "REMOVE_CARD",
  id,
});
