<template>
  <div>
    <div id="demo" style="height: 400px; width: 600px"></div>
    <div style="height: 400px; width: 600px">
      {{ this.timeList.split(',') }} <br>
      {{ this.groupList.split(',') }}<br>
      {{ this.caseList.split(',') }}<br>
      {{ this.apiList.split(',') }}<br>
      {{ this.execList.split(',') }}
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { queryAll } from '@/api/mock-demo'

export default {
  name: "line-chart",
  data () {
    return {
      chart: null,
      timeList: '',
      groupList: '',
      caseList: '',
      apiList: '',
      execList: '',
      dataSet: ''
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      this.chart = echarts.init(document.getElementById("demo"))
      queryAll().then(response => {
        this.timeList = response.data.timeList
        this.groupList = response.data.groupList
        this.caseList = response.data.caseList
        this.apiList = response.data.apiList
        this.execList = response.data.execList
      }).then(() => {
        const option = {
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['用例组', '用例数', '接口数', '执行数']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: this.timeList.split(',')
            // data: [ "2020-04-19", "2020-04-20" ]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '用例组',
              type: 'line',
              data: this.groupList.split(',')
              // data: [ "12", "15" ]
            },
            {
              name: '用例数',
              type: 'line',
              data: this.caseList.split(',')
              // data:  [ "130", "135" ]
            },
            {
              name: '接口数',
              type: 'line',
              data: this.apiList.split(',')
              // data: [ "120", "138" ]
            },
            {
              name: '执行数',
              type: 'line',
              data: this.execList.split(',')
              // data: [ "300", "299" ]
            }
          ]
        }
        this.chart.setOption(option)
      })
      // this.chart = echarts.init(document.getElementById("demo"))
      // const option = {
      //   title: {
      //     text: '折线图堆叠'
      //   },
      //   tooltip: {
      //     trigger: 'axis'
      //   },
      //   legend: {
      //     data: ['用例组', '用例数', '接口数', '执行数']
      //   },
      //   grid: {
      //     left: '3%',
      //     right: '4%',
      //     bottom: '3%',
      //     containLabel: true
      //   },
      //   toolbox: {
      //     feature: {
      //       saveAsImage: {}
      //     }
      //   },
      //   xAxis: {
      //     type: 'category',
      //     boundaryGap: true,
      //     data: this.timeList.split(',')
      //     // data: [ "2020-04-19", "2020-04-20" ]
      //   },
      //   yAxis: {
      //     type: 'value'
      //   },
      //   series: [
      //     {
      //       name: '用例组',
      //       type: 'line',
      //       data: this.groupList.split(',')
      //       // data: [ "12", "15" ]
      //     },
      //     {
      //       name: '用例数',
      //       type: 'line',
      //       data: this.caseList.split(',')
      //       // data:  [ "130", "135" ]
      //     },
      //     {
      //       name: '接口数',
      //       type: 'line',
      //       data: this.apiList.split(',')
      //       // data: [ "120", "138" ]
      //     },
      //     {
      //       name: '执行数',
      //       type: 'line',
      //       data: this.execList.split(',')
      //       // data: [ "300", "299" ]
      //     }
      //   ]
      // }
      // this.chart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
