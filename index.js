/**
 * This function help to generate a future date 
 * @param {Date} initialDAte 
 * @param {{YEARS ?: Number , MONTHS ? : Number , DAYS ?: Number , HOURS ?: Number , MINUTES ?: Number , SECONDS ?: Number ,}} interval 
 * @returns {Date}
 */
function getFutureDate(initialDAte , interval){
    const parts = {
        years : initialDAte.getFullYear(),
        months : initialDAte.getMonth(),
        days : initialDAte.getDate(),
        hours : initialDAte.getHours(),
        minutes : initialDAte.getMinutes(),
        seconds : initialDAte.getSeconds()
    };

    for( [key , value] of Object.entries(interval) ){
        parts[key.toLowerCase()] += value
    }

    return new Date(...Object.values(parts))
}

const date = new Date()
const intUnits = {
    years : 5,
    months : 2,
    days : 4
}

console.log(getFutureDate(date , intUnits));