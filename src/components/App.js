import React,{useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Wallet from "./Wallet"

const API = "http://localhost:3001/sushis";

function App() {
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(100)

  return (
    <div className="app">
      <SushiContainer plates={plates} setPlates={setPlates} money={money} setMoney={setMoney} />
      <Table plates={plates} money={money}/>
      <Wallet money={money} setMoney={setMoney} />
    </div>
  );
}

export default App;
