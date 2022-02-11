/*
 * @Author: wangwei
 * @Date: 2021-11-09 14:29:56
 * @LastEditTime: 2022-02-11 15:33:51
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import base64 from '../utils/base64'
import { getToken } from '../utils/vmsToken'
import axios from 'axios'

var vmsService = {
  login(ipcLinkInfo, data) {
    return axios({
      url: `${ipcLinkInfo.serverIP}/VMS2Service.cgi?Cmd=UserLogin`,
      method: 'get',
      params: {},
      headers: {
        Authorization:
          'Basic ' + base64.base64Encode(data.username + ':' + data.password)
      }
    })
  },
  getIpInfo(ipcLinkInfo, data) {
    return axios({
      url: `${ipcLinkInfo.serverIP}/VMS2Service.cgi?Cmd=DeviceGetIPCLinkInfo`,
      method: 'post',
      data: JSON.stringify(data),
      headers: {
        'auth-token': getToken()
      }
    })
  },
  getRecordList(ip, ipcLinkInfo, data) {
    return axios({
      url: `http://${ip}:${ipcLinkInfo.serverPort}/command?cmd=getrecordlist`,
      method: 'get',
      params: data
    })
  },
  setvideorate(ip, ipcLinkInfo, data) {
    return axios({
      url: `http://${ip}:${ipcLinkInfo.serverPort}/command?cmd=setvideorate`,
      method: 'get',
      params: data
    })
  }
}

export { vmsService }
