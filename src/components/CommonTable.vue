<template>
    <div class="common-table">
        <el-table :data="tableData" height="90vh" stripe>
            <el-table-column show-overflow-tooltip v-for="item in tableLabel" :key="item.prop"
                              :label="item.label" :width="item.width ? item.width : 125"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px;">{{ scope.row[item.prop] }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="180">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
  </template>
  <script>
      export default{
          name:'CommonTable',
          props:{
            tableData:Array,
            tableLabel:Array,
            config:Object,
          },
          data(){
              return{

              }
          },
          methods:{
            handleEdit(index){
                this.$emit('edit',index)
            },
            handleDelete(index){
                this.$emit('del',index)
            },
          }
      }
  </script>
  <style lang="less" scoped>
      .common-table{
          height: calc(100%-62px);
          background-color: #fff;
          position: relative;
      }
  </style>