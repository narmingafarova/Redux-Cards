import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsPage from "./pages/CardsPage";
import CardDetails from "./pages/CardDetails";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import EditCard from "./pages/admin/update/EditCard";
import AddCard from "./pages/admin/update/AddCard";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<CardsPage />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/edit/:id" element={<EditCard />} />
          <Route path="/dashboard/add" element={<AddCard />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
