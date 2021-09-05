import storage from '../utils/storage'

export default {
  // 保存用户信息
  saveUserInfo(state, userInfo) {
    state.userInfo = userInfo
    storage.setItem('userInfo', userInfo)
  },
  // 保存菜单权限列表
  saveMenuList(state, menuList){
    state.menuList = menuList
    storage.setItem('menuList', menuList)
  }
}
