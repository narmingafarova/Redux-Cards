import React from "react";
import CardForm from "../CardForm";
import { connect, useDispatch } from "react-redux";
import { editCard } from "../../../action/cardAction";
import { useNavigate } from "react-router-dom";

const EditCard = ({ pvalue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <>
      <h1 className="text-center mt-3">Edit Card</h1>
      <CardForm
        editcard={pvalue}
        onFormSubmit={(item) => {
          dispatch(editCard(pvalue.id, item));
          navigate("/dashboard");
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  const link = window.location.pathname.slice(16);
  return {
    pvalue: state.find((p) => p.id === link),
  };
};

export default connect(mapStateToProps)(EditCard);
