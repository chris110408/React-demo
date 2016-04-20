/**
 * Created by leichen on 4/11/16.
 */

import _ from 'lodash'

const BoyiName=['紫微','文昌','文曲','天府','禄存']

const CompList = (i)=>{
    let arr= Array(5).fill((i)*5)
    return arr.map((item,index)=>{
        return 1000+index+1+item
    })
}


let BoyiData = (Array(3).fill(1)).map((c,i)=>{
    return {
        id: 8000+i+1,
        name: `博弈示范酒店－${BoyiName[i]}`,
        provice: '北京',
        Area:'CBD',
        complist:CompList(i),
        StarRate:`${5-i}`
    }
})

BoyiData =_.keyBy(BoyiData,'id')


export default BoyiData