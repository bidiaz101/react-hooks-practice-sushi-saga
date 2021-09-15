import React,{useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(100)

  return (
    <div className="app">
      <SushiContainer plates={plates} setPlates={setPlates} money={money} setMoney={setMoney} />
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
