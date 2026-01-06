import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PaymentPage from "./Components/PaymentPage";
import TicketCard from "./Components/TicketCard";
import TicketBuy from "./Components/BuyTickets";
import TicketForm1 from "./Components/TicketForm1";

function App() {
  return (
    <Router basename="/Event">
      <div className="App">
        <Routes>
          <Route
  path="/"
  element={
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🚀 Mega Growth Bonanza 2026</h1>
      <p>For Business Owners & Students</p>

      <h2>🎁 Rewards</h2>
      <p>iPhone • Free Website • Paid Internship</p>

      <h2>💰 Entry Fee: ₹4,999</h2>

      <button
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/Event/paymentpage")}
      >
        Join Now & Pay
      </button>

      <p style={{ fontSize: "12px", color: "gray", marginTop: "15px" }}>
        Paid professional program. Complimentary rewards.
        Not a lottery.
      </p>
    </div>
  }
/>
          
          <Route path="/paymentpage" element={<PaymentPage />} />
          
          <Route path="/ticketcard" element={<TicketCard />} />
          <Route path="/TicketBuy" element={<TicketBuy />} />
          <Route path="/ticketform1" element={<TicketForm1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
