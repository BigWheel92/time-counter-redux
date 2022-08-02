const changeSession=(newValue)=>({type:"CHANGE_SESSION", newValue})
const increaseCounter=()=>({type: "INCREASE_COUNTER"})
const decreaseCounter=()=>({type: "DECREASE_COUNTER"})

export {changeSession, increaseCounter, decreaseCounter}