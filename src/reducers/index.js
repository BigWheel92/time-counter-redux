const mod = (a, n) => a - (n * Math.floor(a / n));

const decrementSeconds = (state) => {
    if (state.days === 0 && state.hours === 0 && state.minutes === 0 && state.seconds === 0)
        return state;

    let {seconds} = state;
    seconds = mod(seconds - 1, 60);
    if (seconds === 59)
        state = decrementMinutes(state);
    return {...state, seconds};
}

const decrementMinutes = (state) => {
    if (state.days === 0 && state.hours === 0 && state.minutes === 0)
        return state;

    let {minutes} = state;
    minutes = mod(minutes - 1, 60);
    if (minutes === 59)
        state = decrementHours(state);
    return {...state, minutes}
}

const decrementHours = (state) => {
    if (state.days === 0 && state.hours === 0)
        return state;

    let {hours} = state;
    hours = mod(hours - 1, 24);
    if (hours === 23)
        state = decrementDays(state);
    return {...state, hours}
}

const decrementDays = (state) => {
    if (state.days === 0)
        return state;
    let {days} = state;
    if (days > 0)
        days--;

    return {...state, days};
}

const incrementSeconds = (state) => {
   let {seconds} = state;
   seconds = mod(seconds + 1, 60);
   if (seconds === 0)
       state = incrementMinutes(state);
   return {...state, seconds};
}

const incrementMinutes = (state) => {
   let {minutes} = state;
   minutes = mod(minutes + 1, 60);
   if (minutes === 0)
       state = incrementHours(state);
   return {...state, minutes}
}

const incrementHours = (state) => {
   let {hours} = state;
   hours = mod(hours + 1, 24);
   if (hours === 0)
       state = incrementDays(state);
   return {...state, hours}
}

const incrementDays = (state) => {
   let {days} = state;
       days++;
   return {...state, days};
}

const reducer = (state, action) => {
   let newState=null;
    switch (action.type) {

        case "CHANGE_SESSION":
         newState= {...state, activeSession: action.newValue};
         break;

        case "INCREASE_COUNTER":
         if (state.activeSession === "SECONDS")
            newState=incrementSeconds(state);
         else if (state.activeSession === "MINUTES")
            newState=incrementMinutes(state);
         else if (state.activeSession === "HOURS")
            newState= incrementHours(state);
         else if (state.activeSession === "DAYS")
            newState= incrementDays(state);    

         break;

        case "DECREASE_COUNTER":
         if (state.activeSession === "SECONDS")
            newState= decrementSeconds(state);
         else if (state.activeSession === "MINUTES")
            newState= decrementMinutes(state);
         else if (state.activeSession === "HOURS")
            newState= decrementHours(state);
         else if (state.activeSession === "DAYS")
            newState= decrementDays(state);     
            
         break;

        default:
         newState= state;
         break;
    }
    return newState;
}

export default reducer;