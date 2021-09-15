import React, {useState} from "react";

function Sushi({ image, name, price, plates, setPlates, money, setMoney }) {
  const [beenEaten, setBeenEaten] = useState(false)

  function handleEaten() {
    if(money>=price) {
      setBeenEaten(true)
      setMoney(money-price)
      setPlates([...plates, "plate"])
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
