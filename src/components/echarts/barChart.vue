<template>
  <div id="barChart" style="width: auto;height: 100%"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import {statisticsBySubject} from "@/components/simulatedData";
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components';
import {
  PieChart
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';

echarts.use(
    [TitleComponent, TooltipComponent, VisualMapComponent, PieChart, CanvasRenderer]
);
export default {
  name: 'barChart',
  data() {
    return {
      statisticsBySubject: statisticsBySubject,
      chartHeight: 180,
      myChart: null
    }
  },
  watch: {
    charHeight() {

    }
  },
  computed: {
    heightCompute: function () {
      return {
        "width": "auto",
        "height": this.chartHeight - 20 + "px"
      }
    }
  },
  mounted() {


    let that = this
    this.$nextTick(function () {
      that.chartHeight = this.$parent.$el.clientHeight
      document.getElementById('barChart').style.height=that.chartHeight
      that.loadChart();
    })
    window.addEventListener('resize', () => {


    })

  },
  methods: {
    loadChart() {
      var chartDom = document.getElementById('barChart');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        backgroundColor: '#ffffff',
        title: {
          text: '习题统计',
          left: 'center',
          top: 10,
          textStyle: {
            color: '#ccc'
          }
        },

        tooltip: {
          trigger: 'item'
        },

        visualMap: {
          show: false,
          min: 0,
          max: 20,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '科目',
            type: 'pie',
            radius: '75%',
            center: ['50%', '60%'],
            data:
            // {value: 335, name: '直接访问'},
            // {value: 310, name: '邮件营销'},
            // {value: 274, name: '联盟广告'},
            // {value: 235, name: '视频广告'},
            // {value: 400, name: '搜索引擎'}
                statisticsBySubject.sort(function (a, b) {
                  return a.value - b.value;
                }),
            roseType: 'radius',
            label: {
              color: 'rgba(44,62,80,0.3)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(44,62,80,0.3)'
              },
              smooth: 0.6,
              length: 10,
              length2: 40
            },
            itemStyle: {
              color: '#c23531', /***********配合主题颜色，需做更改***************/
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function () {
              return Math.random() * 200;
            }
          }
        ]
      };
      myChart.setOption(option)
      this.myChart = myChart
    },
  },
}
</script>

<style lang="less">

</style>
