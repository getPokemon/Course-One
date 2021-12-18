<template>
  <div class="index">
    <div id="mains" style="width: 600px; height: 600px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import {
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  BarChart,
  CanvasRenderer,
  UniversalTransition,
]);
export default {
  methods: {
    Echarts() {
      var myChart = this.$echarts.init(document.getElementById("mains"));
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["男生", "女生", "趋势"],
        },
        xAxis: [
          {
            type: "category",
            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月",
            ],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            min: 0,
            max: 1000,
            interval: 100,
            axisLabel: {
              formatter: "{value} 人",
            },
          },
          {
            type: "value",
            name: "",
            min: 0,
            max: 1000,
            interval: 100,
            axisLabel: {
              formatter: "{value} 人",
            },
          },
        ],
        series: [
          {
            name: "男生",
            type: "bar",
            data: [320, 302, 301, 334, 390, 330, 320, 345, 739, 345, 213, 976],
          },
          {
            name: "女生",
            type: "bar",
             data: [220, 182, 191, 234, 290, 330, 310, 456, 123, 457, 678, 123],
          },
          {
            name: "趋势",
            type: "line",
            yAxisIndex: 1,
            data: [150, 212, 201, 154, 190, 330, 410, 242, 576, 799, 234, 577],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.Echarts();
  },
};
</script>

<style>
</style>