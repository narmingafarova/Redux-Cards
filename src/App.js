import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsPage from "./pages/CardsPage";
import CardDetails from "./pages/CardDetails";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<CardsPage />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
