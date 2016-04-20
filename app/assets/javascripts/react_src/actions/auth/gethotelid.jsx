export const GET_HOTEL_LIST= 'GET_HOTEL_LIST'



export function getHotelList(hotelList){
    return {
        type:GET_HOTEL_LIST,
        payload:hotelList
    }

}