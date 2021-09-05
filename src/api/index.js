/**
 * api管理
 */
import request from './../utils/request'
export default {
  login(params) {
    return request({
      url: '/users/login',
      method: 'post',
      data: params
    })
  },
  noticeCount() {
    return request({
      url: '/leave/count',
      method: 'get',
      data: {}
    })
  },
  getMenuList(params) {
    return request({
      url: '/menu/list',
      method: 'get',
      data: params
    })
  },
  getPermissionList() {
    return request({
      url: '/users/getPermissionList',
      method: 'get',
      data: {}
    })
  },
  getUserList(params) {
    return request({
      url: '/users/list',
      method: 'get',
      data: params
    })
  },
  getAllUserList() {
    return request({
      url: '/users/all/list',
      method: 'get',
      data: {}
    })
  },
  userDel(params) {
    return request({
      url: '/users/delete',
      method: 'post',
      data: params
    })
  },
  getRoleAllList() {
    return request({
      url: '/roles/allList',
      method: 'get',
      data: {}
    })
  },
  getRoleList(params) {
    return request({
      url: '/roles/list',
      method: 'get',
      data: params
    })
  },
  getDeptList(params) {
    return request({
      url: '/dept/list',
      method: 'get',
      data: params
    })
  },
  deptOperate(params) {
    return request({
      url: '/dept/operate',
      method: 'post',
      data: params
    })
  },
  userSubmit(params) {
    return request({
      url: '/users/operate',
      method: 'post',
      data: params
    })
  },
  menuSubmit(params) {
    return request({
      url: '/menu/operate',
      method: 'post',
      data: params
    })
  },
  roleOperate(params) {
    return request({
      url: '/roles/operate',
      method: 'post',
      data: params
    })
  },
  updatePermission(params) {
    return request({
      url: '/roles/update/permission',
      method: 'post',
      data: params
    })
  },
  getApplyList(params) {
    return request({
      url: '/leave/list',
      method: 'get',
      data: params
    })
  },
  leaveOperate(params) {
    return request({
      url: '/leave/operate',
      method: 'post',
      data: params
    })
  },
  leaveApprove(params) {
    return request({
      url: '/leave/approve',
      method: 'post',
      data: params
    })
  }
}
