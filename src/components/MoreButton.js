import React from "react";

function MoreButton({displayIndices, setDisplayIndices}) {
  function handleClick(){
    setDisplayIndices([displayIndices[0]+4, displayIndices[1]+4])
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
