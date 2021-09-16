import React, {useState} from "react";

function Sushi({ 
  image, 
  name, 
  price, 
  plates, 
  setPlates, 
  money, 
  setMoney,
  eatenSushi,
  setEatenSushi,
  id
}) {
  const eatenArray = eatenSushi.filter(sushiId => sushiId === id)

  const [beenEaten, setBeenEaten] = useState(eatenArray[0] === id ? true : false)

  function handleEaten() {
    if(money>=price) {
      setBeenEaten(true)
      setMoney(money-price)
      setPlates([...plates, "plate"])
      setEatenSushi([...eatenSushi, id])
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={beenEaten ? null : handleEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {beenEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
