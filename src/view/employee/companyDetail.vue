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
          title: '管理费',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.companySalary.csmanageSalary)
          }
        },
        {
          title: '养老保险',
          key: 'companySalary.s1',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.companySalary.s1)
          }
        },
        {
          title: '事业保险',
          key: 'companySalary.s2',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.companySalary.s2)
          }
        },
        {
          title: '生育保险',
          key: 'companySalary.s3',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.companySalary.s3)
          }
        },
        {
          title: '医疗保险',
          key: 'companySalary.s4',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.companySalary.s4)
          }
        },
        {
          title: '公积金',
          key: 'companySalary.s5',
          align: 'center',
          tooltip: true,
          render: (h, params) => {
            return h('span', params.row.companySalary.s5)
          }
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
    getTable (cname) {
      let t = this
      axios.post('http://127.0.0.1:8081/company?cname=' + cname).then(res => {
        var result = res.data.data
        t.tableData = result
      })
      axios.post('http://127.0.0.1:8081/company/is').then(res => {
        this.$Message.info({
          title: '提示',
          content: '有公司未缴纳费用，请缴纳'
        })
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
    this.$Modal.confirm({
      render: (h) => {
        return h('Input', {
          props: {
            value: this.value,
            autofocus: true,
            placeholder: '请输入公司名字'
          },
          on: {
            input: (val) => {
              this.cname = val
            }
          }
        })
      },
      onOk: () => {
        this.getTable(this.cname)
      }
    })
  }
}
</script>
