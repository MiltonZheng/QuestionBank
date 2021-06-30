<template>
  <div id="lineChart" style="width: auto;height: 280px"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  GridComponent
} from 'echarts/components';
import {
  BarChart
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';
import {statisticsByDate} from "@/components/simulatedData";

echarts.use(
    [TooltipComponent, GridComponent, BarChart, CanvasRenderer]
);

export default {
  name: 'lineChart',
  data() {
    return {
      statisticsBySubject: statisticsByDate
    }
  },
  mounted() {
    this.loadChart();

  },
  methods: {
    loadChart() {

      var chartDom = document.getElementById('lineChart');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: '习题统计',
          left: 'center',
          top: 10,
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: statisticsByDate.dates,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            color: "#c23531", /***********配合主题颜色，需做更改***************/
            data: statisticsByDate.textNums
          }
        ]
      };
      myChart.setOption(option)
      // window.addEventListener("resize", () => {
      //   myChart.resize()
      // })
    },
  },
}
</script>

<style lang="less">

</style>
