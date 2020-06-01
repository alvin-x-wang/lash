

import IEcharts from 'vue-echarts-v3/src/lite.js'

import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'


export default {
  install(Vue) {
    Vue.component('IEcharts', IEcharts)
  }
}