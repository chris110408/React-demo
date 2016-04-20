//dummydata will replace by ajax call
import DummyData from '../../../dummyData/index'

export const RATE_DATA= 'RATE_DATA'




export function get_rate_data(id){
    const request=DummyData.allObj[''+id]
    return {
        type:RATE_DATA,
        payload:request
    }
}

