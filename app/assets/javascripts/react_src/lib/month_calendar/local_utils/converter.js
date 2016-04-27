/**
 * Created by leichen on 4/21/16.
 */


const _digit1to2=(number)=>{
   return  (number < 10 ? '0' : '') + number
}

const standardDateFormat =(year,month,day)=>{
    return `${year}-${_digit1to2(month)}-${_digit1to2(day)}`
}


export {standardDateFormat}