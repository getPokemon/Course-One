<template>
  <div class="index">
    <el-descriptions
      class="margin-top"
      :column="3"
      size="mini"
      border
      v-for="item in data.rows"
      :key="item.id"
    >
      <template slot="extra"> </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>5--
          用户名
        </template>
        {{ item.nickname }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        {{ item.url }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          购买时间
        </template>
        <el-tag size="small">{{ item.timer }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        {{ item.address }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        {{ item.province }}
      </el-descriptions-item>
    </el-descriptions>
    
    <div class="pager">
      <Pager
        :current="routeInfo.page"
        :total="total"
        :limit="routeInfo.limit"
        :visibleNumber="8"
        @pageChange="handlePageChange"
      />
    </div>
  </div>
</template>
<script>
import fetchData from "../mixins/index";
import { getUse } from "../api/use";
import Pager from "../components/Pager";
export default {
  components: { Pager },
  mixins: [fetchData(null)],
  data() {
    return {
      total: 2000,
      pagesize: 3,
      currentPage: 1,
    };
  },
  methods: {
    async fetchData() {
      return await getUse();
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      this.$router.push({
        name: "information",
        query,
      });
    },
  },
  computed: {
    routeInfo() {
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      
      return {
        page,
        limit,
      };
    },
  },
  watch: {
    async $route() {
      this.data = await this.fetchData();
    },
  },
};
</script>
<style lang="less" scoped>
.index {
  height: 600px;
  overflow-y: auto;
  padding: 0 30px;
  .el-descriptions {
    margin-top: 10px;
    .el-descriptions-row {
      padding-left: 3px;
      overflow: hidden !important;
    }
  }
  .el-descriptions-row {
    padding: 0 10px;
  }
}
.el-descriptions__body {
  color: #606266;
  background-color: #fff;
  padding: 20px;
}
.pager{
  margin-top: 20px;
}
</style>
