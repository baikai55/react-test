import request from "../../utils/request"
function get_table() {
    return request({
        url: '/get/table/data',
        method: 'get'
    })
}
export { get_table };