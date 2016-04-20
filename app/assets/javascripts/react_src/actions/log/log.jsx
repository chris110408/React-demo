//dummydata will replace by ajax call
import DummyData from '../../../dummyData/index'

export const LOG_DATA= 'LOG_DATA'




export function get_log_data(id){
    const request = [].concat(DummyData.outPut[id])

    return {
        type:LOG_DATA,
        payload:request
    }
}
