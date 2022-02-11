<!--
 * @Author: wangwei
 * @Date: 2021-11-09 14:29:56
 * @LastEditTime: 2022-02-11 15:37:21
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ichinae-vms-video-main\dev\serve.vue
-->

<script>
import IchinaeVmsVideo from '@/i-video-alpha'
import Vue from 'vue'
export default Vue.extend({
  name: 'ServeDev',
  components: {
    IchinaeVmsVideo
  },
  data() {
    return {
      videoOption: {
        size: 4, // 分频数  1 4
        fontSize: 100,
        text: 'admin' // 水印名字
      },
      vmsOption: {
        ipcLinkInfo: {
          serverIP: 'http://10.0.20.126',
          serverPort: '8000'
        },
        vmslogin: {
          username: 'admin',
          password: '123456'
        }
      }
    }
  },
  methods: {
    play() {
      this.$refs.video.pushvideo('data[this.defaultProps.label]', '100252')
    }
  }
})
</script>

<template>
  <div id="app">
    <el-button type="primary" @click="play">西安</el-button>
    <div class="videoWrap">
      <IchinaeVmsVideo ref="video" :video-option="videoOption" :vms-option="vmsOption" />

    </div>
  </div>
</template>
<style scoped>

.videoWrap{
  width: 100%;
  height: 90vh;
}
</style>
