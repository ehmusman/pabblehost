import "./App.css"
import React, { useState } from "react";
import Order from "./components/Order";
import Pricing from "./components/Pricing";
import Server from "./components/Server";
function App() {
  const [selectedPlan, setSelectedPlan] = useState("")

  const handleSelection = (text) => {
    setSelectedPlan(text)
  }
  return (
    <div>
      <Pricing
        selection={handleSelection}
      />
      {selectedPlan === "Extreme" ? <Server /> : <Order
        planType={selectedPlan}
      />}

    </div>
  );
}

export default App;
