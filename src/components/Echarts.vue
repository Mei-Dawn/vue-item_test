<template>
  <div ref="echart">

  </div>
</template>

<script>
  /* eslint-disable */
  //在这里编写组件所接收的相应属性和它的内部逻辑

  import * as echart from 'echarts'
  import * as echarts from 'echarts'

  export default {
    props: { //在这进行一个区分 是折线图 还是饼状图还去柱状图
      isAxisChart: {
        type: Boolean,
        default: true
      },
      //接收传递进来的options 的一个参数
      chartData: {
        type: Object,
        //同时需要定义一个默认值，定义默认值的原因是为了防止我们调用这个组件不传这个属性的时候，我们组件的一个容错性
        default () {
          return {
            xData: [],
            series: []
          }
        }
      }

    },
    watch: {
      chartData: {
        handler: function () {
          this.initChart()
        },
        deep: true
      }
    },
    methods: {
      initChart() {
        this.initChartData()
        if (this.echart) {
          this.echart.setOption(this.options)
        } else {
          this.echart = echarts.init(this.$refs.echart)   //注意这里的 $refs
          this.echart.setOption(this.options)
        }

      },
      initChartData() {
        if (this.isAxisChart) {
          this.axisOption.xAxis.data = this.chartData.xData
          this.axisOption.series = this.chartData.series

        } else {
          this.normalOption.series = this.chartData.series
        }
      }
    },

    data() {
      return {
        axisOption: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },

          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: [],
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [{
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          }, ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [],
        },
        normalOption: {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [],
        },
        echart: null

      }
    },
    computed: {
      options() {
        return this.isAxisChart ? this.axisOption : this.normalOption
      }
    }
  }
</script>