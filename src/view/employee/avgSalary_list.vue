<template>
  <Card :bordered="false">
    <div>
      <span class="search-lable">人员名称：</span>
      <Input placeholder="输入人员名称进行搜索" v-model="ename" clearable style="width: 300px" />
      <Button class="search-btn" type="primary" icon="ios-search" @click="searchRole()" >&nbsp;&nbsp;搜索</Button>
    </div>
    <i-table border  :columns="columns" :loading="loading" :data="tableData" style=""></i-table>
  </Card>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      ename: '',
      /* loading */
      loading: false,
      /* 菜单信息列表数据 */
      tableData: [],
      columns: [
        {
          title: 'ID',
          align: 'center',
          key: 'eid',
          tooltip: true,
          width: 80
        },
        {
          title: '人员名',
          key: 'ename',
          align: 'center',
          tooltip: true
        },
        {
          title: '每年平均薪资',
          key: 'employeeSalaryRespDto.avgSalary',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalaryRespDto.avgSalary)
          }
        },
        {
          title: '年份',
          key: 'employeeSalaryRespDto.esdate',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalaryRespDto.esdate)
          }
        }
      ]
    }
  },
  methods: {
    /* 获取列表数据 */
    getTable () {
      let t = this
      axios.post('http://127.0.0.1:8081/employee/avgSalary').then(res => {
        var result = res.data
        t.tableData = result
      })
    },
    /* 搜索按钮触发方法 */
    searchRole () {
      this.getTable()
    },
    /** 切换页码 */
    pageSearch (e) {
      this.pageIndex = e
      this.getTable()
    }
  },
  created () {
    this.getTable()
  }
}
</script>
