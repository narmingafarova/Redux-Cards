import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsPage from "./pages/CardsPage";
import CardDetails from "./pages/CardDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<CardsPage />} />
          <Route path="/card/:id" element={<CardDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
