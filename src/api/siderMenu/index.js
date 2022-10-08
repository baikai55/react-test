import requst from '../../utils/request'
function get_menu() {
    return requst({
        url: '/get/menu',
        method: 'get'
    })
}
export default get_menu;