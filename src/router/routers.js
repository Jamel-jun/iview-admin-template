import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/employee/employee-list')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: Main,
    children: [
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-menu',
          title: '人员'
        },
        component: () => import('@/view/employee/employee-list.vue')
      },
      {
        path: 'level_1_1',
        name: 'level_1_1',
        meta: {
          icon: 'md-funnel',
          title: '公司'
        },
        component: () => import('@/view/employee/company-list.vue')
      }
    ]
  },
  {
    path: '/qianduan',
    name: 'qianduan',
    meta: {
      icon: 'md-menu',
      title: '前端'
    },
    component: Main,
    children: [
      {
        path: 'employeeDetail',
        name: 'employeeDetail',
        meta: {
          icon: 'md-menu',
          title: '查询员工详情'
        },
        component: () => import('@/view/employee/employeeDetail.vue')
      },
      {
        path: 'companyDetail',
        name: 'companyDetail',
        meta: {
          icon: 'md-funnel',
          title: '查询公司费用'
        },
        component: () => import('@/view/employee/companyDetail.vue')
      },
      {
        path: 'employeeShebao',
        name: 'employeeShebao',
        meta: {
          icon: 'md-funnel',
          title: '社保查询'
        },
        component: () => import('@/view/employee/employeeShebao.vue')
      },
      {
        path: 'avgSalary_list',
        name: 'avgSalary_list',
        meta: {
          icon: 'md-funnel',
          title: '统计管理'
        },
        component: () => import('@/view/employee/avgSalary_list.vue')
      }
    ]
  },
  {
    path: '/houduan',
    name: 'houduan',
    meta: {
      icon: 'md-menu',
      title: '后端'
    },
    component: Main,
    children: [
      {
        path: 'gongzi',
        name: 'gongzi',
        meta: {
          icon: 'md-funnel',
          title: '工资管理'
        },
        component: parentView,
        children: [
          {
            path: 'detail',
            name: 'detail',
            meta: {
              icon: 'md-funnel',
              title: '员工实际工资'
            },
            component: () => import('@/view/employee/detail.vue')
          },
          {
            path: 'fafang',
            name: 'fafang',
            meta: {
              icon: 'md-funnel',
              title: '员工发放工资'
            },
            component: () => import('@/view/employee/fafang.vue')
          },
          {
            path: 'isfafang',
            name: 'isfafang',
            meta: {
              icon: 'md-funnel',
              title: '工资发放管理'
            },
            component: () => import('@/view/employee/isfafang.vue')
          }
        ]
      },
      {
        path: 'feiyong',
        name: 'feiyong',
        meta: {
          icon: 'md-funnel',
          component: parentView,
          title: '费用管理'
        },
        component: parentView,
        children: [
          {
            path: 'jisuan',
            name: 'jisuan',
            meta: {
              icon: 'md-funnel',
              title: '计算费用'
            },
            component: () => import('@/view/employee/company-list.vue')
          },
          {
            path: 'fafang',
            name: 'fafang',
            meta: {
              icon: 'md-funnel',
              title: '员工发放工资'
            },
            component: () => import('@/view/employee/fafang.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/me',
    name: 'me',
    meta: {
      icon: 'md-menu',
      title: '我'
    },
    component: Main,
    children: [
      {
        path: 'me',
        name: 'me',
        meta: {
          icon: 'md-funnel',
          title: '我'
        },
        component: () => import('@/view/employee/me.vue')
      }
    ]
  }
]
