<template>
  <Card :bordered="false">
    <i-table border  :columns="columns" :loading="loading" :data="tableData" style=""></i-table>
  </Card>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
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
          title: '所属公司',
          key: 'cname',
          align: 'center',
          tooltip: true
        },
        {
          title: '基础薪水',
          key: 'employeeSalary.esbasicSalary',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalary.esbasicSalary)
          }
        },
        {
          title: '奖金',
          key: 'employeeSalary.esbonus',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalary.esbonus)
          }
        },
        {
          title: '养老保险',
          key: 'employeeSalary.esbonus',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalary.s1)
          }
        },
        {
          title: '事业保险',
          key: 'employeeSalary.esbonus',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalary.s2)
          }
        },
        {
          title: '生育保险',
          key: 'employeeSalary.esbonus',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalary.s3)
          }
        },
        {
          title: '医疗保险',
          key: 'employeeSalary.esbonus',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalary.s4)
          }
        },
        {
          title: '公积金',
          key: 'employeeSalary.esbonus',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalary.s5)
          }
        },
        {
          title: '税费',
          key: 'employeeSalarytax',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalary.tax)
          }
        },
        {
          title: '实际发放工资',
          key: 'actualSalary',
          align: 'center',
          tooltip: true
        },
        {
          title: '月份',
          key: 'employeeSalary.esdate',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.employeeSalary.esdate)
          }
        }
      ]
    }
  },
  methods: {
    /* 获取列表数据 */
    getTable () {
      let t = this
      axios.post('http://127.0.0.1:8081/employee/me').then(res => {
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
