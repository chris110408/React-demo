/**
 * Created by leichen on 5/11/16.
 */


import R from 'ramda'
import moment from 'moment'




//::obj->bool
const isNothing = (obj) =>{
    if(obj== null ||obj == undefined ||R.keys(obj).length==0){
        return true ;
    }
    return false;
}


const _createNewObj = (obj,keys)=>{

    let addKey=(acc,key)=>{
        let curretObj = obj[''+key]
        let dayofweek = moment(key).day();
        curretObj = Object.assign(curretObj,{dayofweek:dayofweek} )
        acc =  R.concat(acc,[curretObj])
        return acc
    }

    return R.reduce(addKey,[])(keys)

};

const createNewObj= R.curry(_createNewObj);

//::{date:obj}->[obj]
const convertData=(PriceData)=>{
    return R.compose(createNewObj(PriceData),R.keys)(PriceData)
}

//::obj->bool
const isWeekDay = (dayObj) => {
    let _day = dayObj.dayofweek;
    return (_day==5 || _day==6) ? false : true
}
//::obj->bool
const isWeekEnd = (dayObj) => {
    let _day = dayObj.dayofweek;
    return (_day==5 || _day==6) ? true : false
}





//::obj->num->obj
const createHotelDataObj=(obj,elt)=>{
    obj=Object.assign({},obj);
    let price = elt.price;
    obj.min= price<obj.min ? price : obj.min;
    obj.max= price>obj.max ? price : obj.max;
    obj.num= obj.num +1;
    obj.total = obj.total + price;
    return obj;
}


//::obj->num->obj
const createCompDataObj=(obj,elt)=>{
    obj=Object.assign({},obj);
    let price = ((elt.avg_competitor*10)>>0)/10;
    obj.min= price<obj.min ? price : obj.min;
    obj.max= price>obj.max ? price : obj.max;
    obj.num= obj.num +1;
    obj.total = obj.total + price;
    return obj;

}

//::(obj->num->obj)->[obj]->[obj]
const _groupPrice=(cb,prices)=> {
    const initArr= Array(3).fill({min:Infinity,num:0,total:0,max:Math.log(0),label:null});

    const reducePrice = (acc, elt)=> {
        let DBA = elt.dayDiff;
        if (DBA < 30) {
            if(isNothing(acc[0].label)){
                acc[0].label = '00-29天'
            }
            acc[0] = Object.assign({}, cb(acc[0], elt))
            return acc;
        }
        if (DBA > 59) {
            if(isNothing(acc[2].label)){
                acc[2].label = '60-89天'
            }
            acc[2] = Object.assign({}, cb(acc[2],  elt))
            return acc;
        }
        if(isNothing(acc[1].label)){
            acc[1].label = '30-59天'
        }
        acc[1] = Object.assign({}, cb(acc[1],  elt))

        return acc
    }
    return R.reduce(reducePrice,initArr)(prices)
}
//curry
const groupPrice= R.curry(_groupPrice);

//::(obj->num->obj)->(obj-bool)->(Obj->[obj])
const createPricesObj =(fnCreateDataObj,isWeekOfDay)=>{
    return  R.compose(groupPrice(fnCreateDataObj),R.filter(isWeekOfDay) ,convertData)
}



const part_hotelWeekdayPrices = createPricesObj(createHotelDataObj,isWeekDay)
const part_hotelWeekEndPrices = createPricesObj(createHotelDataObj,isWeekEnd)
const part_compWeekdayPrices = R.compose(groupPrice(createCompDataObj),R.filter(isWeekDay) ,convertData)
const part_compWeekEndPrices = R.compose(groupPrice(createCompDataObj),R.filter(isWeekEnd) ,convertData)




const getPrice = (PriceData) => {
   let isCompEmpty= isNothing(PriceData.COMP_DATA)
   let isHotelEmpty = isNothing(PriceData.HOTEL_DATA)
   const hotelWeekdayPrices = part_hotelWeekdayPrices(PriceData.HOTEL_DATA);
   const hotelWeekEndPrices = part_hotelWeekEndPrices(PriceData.HOTEL_DATA);

   const compWeekdayPrices = part_compWeekdayPrices(PriceData.COMP_DATA);
   const compWeekEndPrices = part_compWeekEndPrices(PriceData.COMP_DATA);

    return {hotel:{isEmpty:isHotelEmpty,
                 WeekdayPrices : hotelWeekdayPrices,
                 WeekEndPrices : hotelWeekEndPrices},
            comp:{ isEmpty:isCompEmpty,
                    WeekdayPrices :  compWeekdayPrices,
                    WeekEndPrices : compWeekEndPrices}


    }

}

export {getPrice,isNothing}