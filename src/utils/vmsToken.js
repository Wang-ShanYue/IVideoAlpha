/*
 * @Author: wangwei
 * @Date: 2021-11-09 14:29:56
 * @LastEditTime: 2022-02-11 15:34:17
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function getToken() {
  return localStorage.getItem('vmsToken')
}

export function setToken(token) {
  localStorage.setItem('vmsToken', token)
}

export function clearToken() {
  localStorage.removeItem('vmsToken')
}

export function isLogined() {
  if (localStorage.getItem('vmsToken')) {
    return true
  }
  return false
}
