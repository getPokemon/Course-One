<template>
  <div class="index">
      <BrokenLine />
      <PieChart />
      
  </div>
</template>

<script>
import PieChart from '../components/PieChart'
import BrokenLine from '../components/BrokenLine'
export default {
    components:{
        PieChart,
        BrokenLine
    }

}
</script>

<style lang="less" scoped>
.index{
    padding-top: 20px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
}

</style>