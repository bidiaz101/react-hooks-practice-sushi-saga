import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({plates, setPlates, money ,setMoney}) {
  const [sushiData, setSushiData] = useState([])
  const [displayIndices, setDisplayIndices] = useState([0,4])

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
    .then(resp=> resp.json())
    .then(data => setSushiData(data))
  }, [])

  const sushiToDisplay = sushiData.slice(displayIndices[0], displayIndices[1]).map(sushi => { 
    return <Sushi 
      name={sushi.name} 
      image={sushi.img_url} 
      price={sushi.price} 
      key={sushi.id}
      setPlates={setPlates}
      plates={plates}
      money={money}
      setMoney={setMoney}
    />
  })

  return (
    <div className="belt">
      {sushiToDisplay}
      <MoreButton displayIndices={displayIndices} setDisplayIndices={setDisplayIndices} />
    </div>
  );
}

export default SushiContainer;
