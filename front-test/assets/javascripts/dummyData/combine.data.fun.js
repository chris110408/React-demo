/**
 * Created by leichen on 4/11/16.
 */
import * as MyFun from './price.data.fun'
import Comp from './comp.data'
import Boyi from './boyi.data'
import _ from 'lodash'

const boyi5 = _.keyBy(MyFun.ascRate(90,8001,480,Boyi),'stay_date_CN');
const comp5_1 = _.keyBy(MyFun.flatRate(90,1001,520,Comp),'stay_date_CN');
const comp5_2 = _.keyBy(MyFun.weekdayRate(90,1002,600,Comp),'stay_date_CN');
const comp5_3 = _.keyBy(MyFun.fuckedRate(90,1003,500,Comp),'stay_date_CN');
const comp5_4 = _.keyBy(MyFun.randomRate(90,1004,500,Comp),'stay_date_CN');
const comp5_5 = _.keyBy(MyFun.weekdayRate(90,1005,500,Comp),'stay_date_CN');



const boyi4 = _.keyBy(MyFun.ascRate(90,8002,320,Boyi),'stay_date_CN');
const comp4_1 = _.keyBy(MyFun.flatRate(90,1006,380,Comp),'stay_date_CN');
const comp4_2 = _.keyBy(MyFun.weekdayRate(90,1007,400,Comp),'stay_date_CN');
const comp4_3= _.keyBy(MyFun.fuckedRate(90,1008,400,Comp),'stay_date_CN');
const comp4_4 = _.keyBy(MyFun.weekdayRate(90,1009,430,Comp),'stay_date_CN');
const comp4_5 = _.keyBy(MyFun.randomRate(90,1010,400,Comp),'stay_date_CN');


const boyi3 = _.keyBy(MyFun.ascRate(90,8003,280,Boyi),'stay_date_CN');
const comp3_1 = _.keyBy(MyFun.flatRate(90,1011,260,Comp),'stay_date_CN');
const comp3_2 = _.keyBy(MyFun.weekdayRate(90,1011,250,Comp),'stay_date_CN');
const comp3_3 = _.keyBy(MyFun.fuckedRate(90,1013,250,Comp),'stay_date_CN');
const comp3_4 = _.keyBy(MyFun.flatRate(90,1014,280,Comp),'stay_date_CN');
const comp3_5 = _.keyBy(MyFun.randomRate(90,1015,260,Comp),'stay_date_CN');


//const addArray=(oldObj,newObj)=>{
//
//    let looparr = Object.keys(oldarray).length==0?newarray:oldarray;
//   return  (Object.keys(looparr)).map(i=>{
//
//
//              oldarray
//        return {
//
//
//        }
//    })
//
//}


let b5= Object.keys(boyi5)

    .reduce((acc,curKey)=>{
    let newobj={}
    let oldobj=boyi5[`${curKey}`];
        newobj[`${oldobj.company_name}`]=oldobj.price
    acc[`${curKey}`]=newobj
        return acc
},{})

let b4= Object.keys(boyi4)

    .reduce((acc,curKey)=>{
        let newobj={}
        let oldobj=boyi4[`${curKey}`];
        newobj[`${oldobj.company_name}`]=oldobj.price
        acc[`${curKey}`]=newobj
        return acc
    },{})

let b3= Object.keys(boyi3)

    .reduce((acc,curKey)=>{
        let newobj={}
        let oldobj=boyi3[`${curKey}`];
        newobj[`${oldobj.company_name}`]=oldobj.price
        acc[`${curKey}`]=newobj
        return acc
    },{})


const addObj=(tableObj,priceObj)=>{
    tableObj=_.cloneDeep(tableObj)


    Object.keys(tableObj)

        .forEach((curKey)=>{

            const priceobj=priceObj[`${curKey}`];

            tableObj[`${curKey}`][`${priceobj.company_name}`]= priceobj.price


        })
    return  tableObj
}

const tfun = (def,redList)=>{
    return redList.reduce((acc,item,i)=>{
        return addObj(acc,item)
    },def)
}


const preobj5list =[comp5_1,comp5_2]

const preobj6 = tfun(b5,preobj5list)






let pretObj5 =addObj(addObj(addObj(addObj(addObj(b5,comp5_1),comp5_2),comp5_3),comp5_4),comp5_5)

let pretObj4 =addObj(addObj(addObj(addObj(addObj(b4,comp4_1),comp4_2),comp4_3),comp4_4),comp4_5)
let pretObj3 =addObj(addObj(addObj(addObj(addObj(b3,comp3_1),comp3_2),comp3_3),comp3_4),comp3_5)

//
//let retObj5=addObj(b5,comp5_1)
//
//

const converObjArr=(obj)=>{

    let ret= Object.keys(obj).map((k)=>{
        let newobj={};
        newobj['日期']=k
        let oldObj=obj[`${k}`]
        Object.keys(oldObj).forEach((key)=>{
            newobj[''+key]=oldObj[''+key]
        })

        return newobj
        })
    return ret
}


let retObj5=converObjArr(pretObj5)
let retObj4=converObjArr(pretObj4)
let retObj3=converObjArr(pretObj3)


export {retObj5,retObj4,retObj3,preobj6}

//const randomRate  =(days,compid,baseprice)=>{
//
//    return  dateArr(days).map((item,i)=>{
//        return {
//            scrape_date:item.scrapeDate.toDate(),
//            stay_date_CN: item.date.format('YYYY年MM月DD日'),
//            stay_date_n:item.date.toDate(),
//            price:_randommak(ascp(baseprice,item.scrapeDate,item.date),item.date,baseprice),
//            compid:compid
//        }
//
//    })
//
//}
//
//
//
//
//export{flatRate,weekdayRate,ascRate,fuckedRate,randomRate}