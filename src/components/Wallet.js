import React, {useState} from "react"

function Wallet({money, setMoney}) {
    const [input, setInput] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        setMoney(money+parseInt(input))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Amount Here: </label>
            <input type="number" name="wallet" value={input} onChange={e => e.target.value >= 0 ? setInput(e.target.value) : null} />
            <button type="submit">Add Money</button>
        </form>
    )
}

export default Wallet