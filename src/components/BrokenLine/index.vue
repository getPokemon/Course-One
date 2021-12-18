<template>
  <div class="index">
    <div id="main" style="width: 600px; height: 600px"></div>
  </div>
</template>

<script>
export default {
  name: "Echarts",
  methods: {
    Echarts() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
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
        },

        series: [
          {
            name: "数学",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320, 345, 739, 345, 213, 976],
          },
          {
            name: "语文",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210, 345, 777, 234, 678, 901],
          },
          {
            name: "音乐",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310, 456, 123, 457, 678, 123],
          },
          {
            name: "美术",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [150, 212, 201, 154, 190, 330, 410, 242, 576, 799, 234, 577],
          },
          {
            name: "绘画",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [
              820, 832, 901, 934, 1290, 1300, 1320, 900, 800, 900, 500, 229,
            ],
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

