/**
 * Created by leichen on 4/11/16.
 */
import * as MyFun from './price.data.fun'
import Comp from './comp.data'
import Boyi from './boyi.data'
import _ from 'lodash'
import moment from 'moment'


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
const comp3_2 = _.keyBy(MyFun.weekdayRate(90,1012,250,Comp),'stay_date_CN');
const comp3_3 = _.keyBy(MyFun.fuckedRate(90,1013,250,Comp),'stay_date_CN');
const comp3_4 = _.keyBy(MyFun.flatRate(90,1014,280,Comp),'stay_date_CN');
const comp3_5 = _.keyBy(MyFun.randomRate(90,1015,260,Comp),'stay_date_CN');

const preobj5list =[comp5_1,comp5_2,comp5_3,comp5_4,comp5_5]
const preobj4list =[comp4_1,comp4_2,comp4_3,comp4_4,comp4_5]
const preobj3list =[comp3_1,comp3_2,comp3_3,comp3_4,comp3_5]



let keyTrans = (key) =>{

    let year =  ''+key.slice(0,4)
    let month =  ''+key.slice(5,7)
    let day =''+key.slice(8,10)

    let keyobj={};
    keyobj.newkey= year +'-' +month+'-' + day;
    keyobj.oldkey= key;

    return keyobj
}

let transkey = (company) =>{
   return Object.keys(company).map(keyTrans)
                       .reduce((acc,key,i)=>{
                           let newobj={}
                           acc[''+key.newkey]=company[''+key.oldkey]
                           return acc
                       },{})
}

let startObj = Array(90).fill(1).reduce((acc,el,ind)=>{
            let key =  moment().startOf('d').add(ind,'days').format('YYYY年MM月DD日')
            acc[''+key] = {
                    max_competitor:0,
                    min_competitor:0,
                    avg_competitor:0,
                    total_competitor:0,
                    comp_num:0
            }
    return acc
},{})



let addComp = (mystart,comp) =>{
   let start = Object.assign({},mystart)

    Object.keys(start).forEach((key)=>{
        let compprice=comp[''+key].price

        let startItem = start[''+key]
        let  total_competitor = startItem.total_competitor +  compprice
        let comp_num = startItem.comp_num + 1
        let max_competitor = startItem[max_competitor] > compprice ?startItem.max_competitor:compprice
        let min_competitor = startItem.min_competitor < compprice ?startItem.min_competitor:compprice
        let avg_competitor = total_competitor==0 ? 0: (total_competitor/comp_num)

        startItem.max_competitor = max_competitor
        startItem.min_competitor =  min_competitor
        startItem.avg_competitor = avg_competitor
        startItem.comp_num = comp_num
        startItem.total_competitor =  total_competitor

    })
    return start
}

let calpreFact = (list) =>{
    return list.reduce((acc,el,ind)=>{
        acc=addComp(acc,el)
        return acc
    },startObj)
}













const calpriceMaker = (boyiCompany, compsObj) =>{

    return Object.keys(boyiCompany).reduce((acc,key)=>{
        let obj=boyiCompany[''+key]
        let Boyiprice = obj[Object.keys(obj)[0]]
        let newItem = Object.assign({},compsObj[''+key])
        let index = Boyiprice > 0 ? newItem.avg_competitor/Boyiprice : 0
        newItem.price_suggestion = ((newItem.avg_competitor-Boyiprice)>>0)
        newItem.current_price =  (Boyiprice>>0)
        newItem.price_index = (index*100>>0)

        if(newItem.price_suggestion > 0){
            newItem.price_suggestion = '+' + newItem.price_suggestion
        }

        if(index == 0){
            newItem.price_suggestion = ''
            newItem.price_index=0
        }

        acc[''+key]=  newItem
        return acc
    },{})




}


let calPricefact= (compList,boyi) =>{

    let compsObj=calpreFact(compList)
    let data = transkey(calpriceMaker (boyi,compsObj))
    return Object.keys(data).reduce((acc,key)=>{
        let highKey = key.slice(0,7)
        if(!acc[''+highKey]){
            acc[''+highKey]={}
        }
        acc[''+highKey][''+key]=data[''+key]

        return acc
    },{})
}






const temp = ()=>{


    return caldata

}



const competitorList = {

    8001:preobj5list,
    8002:preobj4list,
    8003:preobj3list

}

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

let b5Cal =  calPricefact(preobj5list,b5)
let b4Cal =  calPricefact(preobj4list,b4)
let b3Cal =  calPricefact(preobj3list,b3)



let caldata = {
    8001:b5Cal,
    8002:b4Cal,
    8003:b3Cal,

}

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





 let subOutPut   = (competitorArr)=>{

     let ret = competitorArr.reduce((retAll,Item,i,a)=>{





         let current= Object.keys(Item).reduce((acc,key)=>{

             if(!acc['maxdate']) {
                 acc['maxdate'] = key;
             }
             acc['maxdate']=acc['maxdate']>key?acc['maxdate']:key;

             if(!acc['mindate']) {
                 acc['mindate'] = key;
             }
             acc['mindate']=acc['mindate']<key?acc['mindate']:key;

             if(!acc['data']) {
                 acc['data']=[]
             }

             acc['data'].push(Item['' + key])

             return acc


         },{})


         if(!retAll['maxdate']) {
             retAll['maxdate'] = current['maxdate'];
         }
         retAll['maxdate']=retAll['maxdate']>current['maxdate']?retAll['maxdate']:current['maxdate'];

         if(!retAll['mindate']) {
             retAll['mindate'] = current['mindate'];
         }
         retAll['mindate']=retAll['mindate']>current['mindate']?retAll['mindate']:current['mindate'];
         if(!retAll['data']) {
             retAll['data']=[]
         }

         retAll['data']=retAll['data'].concat([current['data']])
         return retAll
     },{})

     ret.data = _.flatten(ret.data)

     return ret

 }


let logData = Object.keys(competitorList).reduce((ACC,key)=>{

        ACC[key]=subOutPut(competitorList[key])
        ACC[key].name=Boyi[key].name
        ACC[key].id =key
    return ACC
},{})


//let outPut = subOutPut(preobj5list)
//outPut = Boyi


     preobj5list.reduce((retAll,Item,i,a)=>{





   let current= Object.keys(Item).reduce((acc,key)=>{

            if(!acc['maxdate']) {
                acc['maxdate'] = key;
            }
            acc['maxdate']=acc['maxdate']>key?acc['maxdate']:key;

            if(!acc['mindate']) {
                acc['mindate'] = key;
            }
            acc['mindate']=acc['mindate']<key?acc['mindate']:key;

            if(!acc['data']) {
                acc['data']=[]
            }

              acc['data'].push(Item['' + key])

         return acc


    },{})


    if(!retAll['maxdate']) {
        retAll['maxdate'] = current['maxdate'];
    }
    retAll['maxdate']=retAll['maxdate']>current['maxdate']?retAll['maxdate']:current['maxdate'];

    if(!retAll['mindate']) {
        retAll['mindate'] = current['mindate'];
    }
    retAll['mindate']=retAll['mindate']>current['mindate']?retAll['mindate']:current['mindate'];
    if(!retAll['data']) {
        retAll['data']=[]
    }

    retAll['data']=retAll['data'].concat([current['data']])
    return retAll
},{})

//preOutPut.data = _.flatten(preOutPut.data)

//outPut = preOutPut

let pretObj5 = tfun(b5,preobj5list)
let pretObj4 =tfun(b4,preobj4list)
let pretObj3 =tfun(b3,preobj3list)



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


let arr5Star=converObjArr(pretObj5)
let arr4Star=converObjArr(pretObj4)
let arr3Star=converObjArr(pretObj3)


let allObj={
    8001:arr5Star,
    8002:arr4Star,
    8003:arr3Star
}


let OutPut =temp

export {allObj,logData,OutPut}
