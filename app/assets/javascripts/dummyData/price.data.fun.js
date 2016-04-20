/**
 * Created by leichen on 4/11/16.
 */
import moment from 'moment'

const DIVIDER=86400000




const dateArr=(d)=>Array(d).fill(1).map((item,i)=>{
    return { date:moment().startOf('d').add(i,'days'),
             scrapeDate:moment()
            }
})


const flatRate=(days,compid,baseprice,company)=>{
    const companyName=(company[`${compid}`]).name
   return  dateArr(days).map((item,i)=>{

        return {
            scrape_date:item.scrapeDate.format('YYYY-MM-DD'),
            stay_date_CN: item.date.format('YYYY年MM月DD日'),
            stay_date_n:item.date.format('YYYY-MM-DD'),
            price:baseprice,
            compid:compid,
            company_name:companyName
    }

    })

}



function _wdp(wd,price){

    if(wd==5||wd==6){

        return (price/10>>0)+price;

    }
    return price
}


function _wrong_wdp(wd,price){


    if(wd<5){

        return (price/10>>0)+price;

    }
    return price
}

const weekdayRate=(days,compid,baseprice,company)=>{
    const companyName=(company[`${compid}`]).name
    return  dateArr(days).map((item,i)=>{

        return {
            scrape_date:item.scrapeDate.format('YYYY-MM-DD'),
            stay_date_CN: item.date.format('YYYY年MM月DD日'),
            stay_date_n:item.date.format('YYYY-MM-DD'),
            price:_wdp(item.date.weekday(),baseprice),
            compid:compid,
            company_name:companyName
        }

    })

}


function ascp(price,stayday,scrapeday){
    let ret;
    const diffw=scrapeday.diff(stayday,'w')+1
    if(diffw>7){
        return price-(price/10>>0)
    }
    return _wdp(scrapeday.weekday(),(price-10)+(price/10>>0)*(7-diffw))

}



const ascRate=(days,compid,baseprice,company)=>{

    const companyName=(company[`${compid}`]).name
    return  dateArr(days).map((item,i)=>{

        return {
            scrape_date:item.scrapeDate.format('YYYY-MM-DD'),
            stay_date_CN: item.date.format('YYYY年MM月DD日'),
            stay_date_n:item.date.format('YYYY-MM-DD'),
            price:ascp(baseprice,item.scrapeDate,item.date),
            compid:compid,
            company_name:companyName
        }

    })

}

function fucked(price,stayday,scrapeday){


    const diffw=scrapeday.diff(stayday,'w')+1

    if(diffw>3){
        return price+(price/10>>0)
    }
    if(diffw>1){
        return price+2*(price/10>>0)
    }

    return _wrong_wdp(scrapeday.weekday(),(price-(price/10>>0)*(7-scrapeday.diff(stayday,'d'))))

}

 const fuckedRate=(days,compid,baseprice,company)=>{
     baseprice=baseprice+100;
     const companyName=(company[`${compid}`]).name
    return  dateArr(days).map((item,i)=>{
        const tprice=fucked(baseprice,item.scrapeDate,item.date)
        const ret = tprice<(baseprice/2)?(baseprice/2):tprice
        return {
            scrape_date:item.scrapeDate.format('YYYY-MM-DD'),
            stay_date_CN: item.date.format('YYYY年MM月DD日'),
            stay_date_n:item.date.format('YYYY-MM-DD'),
            price:ret,
            compid:compid,
            company_name:companyName
        }

    })

}



function _randommak(price,scrapeday,baseprice,company){
        let tempPrice = (scrapeday.weekday()-scrapeday.month())*10<price?((scrapeday.weekday()-scrapeday.date())*10): scrapeday.weekday()*(price/10>>0)
        let indexPrice = Math.abs(tempPrice)<price/2?tempPrice:(tempPrice/10>>0)

        if((scrapeday.weekday()*5-scrapeday.month()*3)%2==0){
            return indexPrice + baseprice
        }

        //if((scrapeday.weekday()*5-scrapeday.month()*3)%3==0){
        //    return price-indexPrice
        //}
        return price

}


const randomRate  =(days,compid,baseprice,company)=>{
    const companyName=(company[`${compid}`]).name
    return  dateArr(days).map((item,i)=>{

        return {
            scrape_date:item.scrapeDate.format('YYYY-MM-DD'),
            stay_date_CN: item.date.format('YYYY年MM月DD日'),
            stay_date_n:item.date.format('YYYY-MM-DD'),
            price:_randommak(ascp(baseprice,item.scrapeDate,item.date),item.date,baseprice),
            compid:compid,
            company_name:companyName
        }

    })

}




export{flatRate,weekdayRate,ascRate,fuckedRate,randomRate}