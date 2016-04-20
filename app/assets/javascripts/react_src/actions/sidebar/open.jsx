
export const SIDEBAR_OPEN= 'SIDEBAR_OPEN'


export function openSideBar(isOpen){
    return {
        type:SIDEBAR_OPEN,
        payload:isOpen
    }
}
