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
      ename: '',
      cname: '',
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
    getTable (ename) {
      let t = this
      var url = 'http://127.0.0.1:8081/employee?ename=' + ename
      axios.post(url).then(res => {
        var result = res.data.data
        t.tableData = result
      })
      axios.post('http://127.0.0.1:8081/employee/is').then(res => {
        this.$Message.info({
          title: '提示',
          content: '有员工未发放工资，请发放'
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
            placeholder: '请输入员工名字'
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
