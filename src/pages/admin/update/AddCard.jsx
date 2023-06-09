import React from "react";
import CardForm from "../CardForm";
import { useDispatch } from "react-redux";
import { addCardToDatabase } from "../../../action/cardAction";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center mt-3">Add Card</h1>
      <CardForm
        onFormSubmit={(item) => {
          dispatch(addCardToDatabase(item));
          navigate("/card");
        }}
      />
    </>
  );
};

export default AddCard;
