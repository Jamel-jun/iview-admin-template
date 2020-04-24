<template>
  <Card :bordered="false">
    <div>
      <span class="search-lable">公司名称：</span>
      <Input placeholder="输入公司名称进行搜索" v-model="cname" clearable style="width: 300px" />
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
      cname: '',
      /* loading */
      loading: false,
      /* 菜单信息列表数据 */
      tableData: [],
      columns: [
        {
          title: 'ID',
          align: 'center',
          key: 'cid',
          tooltip: true,
          width: 80
        },
        {
          title: '公司名',
          key: 'cname',
          align: 'center',
          tooltip: true
        },
        {
          title: '员工工资支出',
          key: 'cemployeeSalary',
          align: 'center',
          tooltip: true
        },
        {
          title: '管理费',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.companySalary.csmanageSalary)
          }
        },
        {
          title: '税费',
          key: 'tax',
          align: 'center',
          tooltip: true
        },
        {
          title: '五险一金',
          key: 'insurance',
          align: 'center',
          tooltip: true
        },
        {
          title: '实际费用',
          key: 'actualSalary',
          align: 'center',
          tooltip: true
        },
        {
          title: '月份',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.companySalary.csdate)
          }
        }
      ]
    }
  },
  methods: {
    /* 获取列表数据 */
    getTable () {
      let t = this
      axios.post('http://127.0.0.1:8080/company?cname=' + this.cname).then(res => {
        var result = res.data.data
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
