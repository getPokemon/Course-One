<template>
  <div>
 <!--  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb> -->

  <!-- 添加 -->
  <el-card>
    <el-row>
      <el-col>
        课程名称:<input type="text"  name="name"  v-model="tableData.name"  value="" placeholder="请输入课程名称" style="width: 13%;">
        课程教师:<input type="text"  name="teacher" v-model="tableData.teacher" value="" placeholder="请输入教师名称" style="width: 13%;">
        课程课时:<input type="text"  name="date" v-model="tableData.date" value="" placeholder="请输入课程课时" style="width: 13%;">
        课程层次:<input type="text"  name="adress" v-model="tableData.address" value="" placeholder="请输入课程层次" style="width: 13%;">
        <el-button style="margin-left:10px" type="primary" @click="addetail()">添加课程</el-button>
      </el-col>
    </el-row>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="课程名称"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
              <el-input size="mini" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <el-tag size="medium" v-show="!scope.row.show">{{ scope.row.name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="课程教师"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-input size="mini" v-show="scope.row.show" v-model="scope.row.teacher"></el-input>
            <el-tag size="medium" v-show="!scope.row.show">{{ scope.row.teacher }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="课程课时"
      width="180">
      <template slot-scope="scope">
        <el-input size="mini" v-show="scope.row.show" v-model="scope.row.date"></el-input>
        <span style="margin-left: 10px" v-show="!scope.row.show">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="课程层次"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
             <el-input size="mini" v-show="scope.row.show" v-model="scope.row.address"></el-input>
            <el-tag size="medium" v-show="!scope.row.show">{{scope.row.address}}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="scope.row.show = true">编辑</el-button>
           <el-button
          size="mini"
          @click="scope.row.show = false">保存</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index,scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  small
  style="text-align: center;"
  layout="prev, pager, next"
  :total="50">
</el-pagination>
  </el-card>
  </div>
</template>
<script>
export default {
data() {
      return {
        tableData: [{
          date: '65',
          name: '线性代数',
          teacher:'李晓红',
          address: '本科',
          show:false
        }, {
           date: '45',
          name: '高等数学',
          teacher:'李晓红',
          address: '本科',
           show:false
        }, {
           date: '45',
          name: '专业数学',
          teacher:'李晓都',
          address: '专科',
           show:false
        }, {
          date: '85',
          name: '线性代数二',
          teacher:'李晓红',
          address: '本科',
           show:false
        }]
      }
    },
   
    methods: {
      
        addetail(){
         this.tableData.push({
         teacher:this.tableData.teacher,
         name:this.tableData.name,
         date:this.tableData.date,
         address:this.tableData.address,
         
      })    
      this.$message({
       type: 'success',
       message:'添加成功',
      })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index) {
      this.tableData.splice(index,1);
       this.$message({
       type: 'success',
       message:'删除成功',
      })
      }
    },
    
}
</script>

<style>

</style>