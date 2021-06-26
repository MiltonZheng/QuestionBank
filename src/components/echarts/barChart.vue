<template>
  <div id="barChart" style="width: auto;height: 180px"></div>
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
      statisticsBySubject:statisticsBySubject
    }
  },
  mounted() {
    this.loadChart();
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
            radius: '55%',
            center: ['50%', '50%'],
            data:
              // {value: 335, name: '直接访问'},
              // {value: 310, name: '邮件营销'},
              // {value: 274, name: '联盟广告'},
              // {value: 235, name: '视频广告'},
              // {value: 400, name: '搜索引擎'}
            statisticsBySubject.sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
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
    },
  },
}
</script>

<style lang="less">

</style>
