import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  const contractAddress = "[CONTRACT_ADDRESS]";
  const [account, setAccount] = useState<string>();

  return (
    <div className="App">
      <Sidebar setAccount={setAccount} account={account} />
      <Chat account={account} chatContract={undefined} />
    </div>
  );
}

export default App;
