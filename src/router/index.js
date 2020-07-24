import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const  Login = () => import("../views/Login/Login")
const  Layout = () => import("../views/main/Layout")

const  Home = () => import("../views/main/Home")
const  ProjectSupervision = () => import("../views/project-supervision-system/ProjectSupervision")
const  ProjectListInProjectSupervision = () => import("../views/project-supervision-system/inner-page/ProjectListInProjectSupervision")

const  CompanyManage = () => import("../views/project-supervision-system/CompanyManage")
const  CompanyDetail = () => import("../views/project-supervision-system/CompanyDetail")

const  TimeSupervision = () => import("../views/project-supervision-system/TimeSupervision")

const  SpecialAccount = () => import("../views/project-supervision-system/SpecialAccountSup")
const  FullPaymentSup = () => import("../views/project-supervision-system/FullPaymentSup")
const  DepositAndPaySup = () => import("../views/project-supervision-system/DepositAndPaySup")
const  FullPaymentSupDetail = () => import("../views/project-supervision-system/FullPaymentSupDetail")

const  RightsInfoSup = () => import("../views/project-supervision-system/RightsInfoSup")

const  ProjectProcessSup = () => import("../views/project-supervision-system/ProjectProcessSup")

const  ConstructionLicense = () => import("../views/project-supervision-system/ConstructionLicense")

const  mapProjectManagement = () => import("../views/mapProjectManagement/index")

const  enterprise = () => import("../views/integritySupervision/enterprise")

const  personal = () => import("../views/integritySupervision/personal")
const  blackList = () => import("../views/integritySupervision/blackList")
const  warningSystem = () => import("../views/warningSystem/index")



// import Layout from "../views/main/Layout";
// import Home from '../views/main/Home';
// import Login from "../views/main/Login";
// import Sub1 from "../views/project-supervision-system/Sub1";


const routes = [
  // 工作台
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Layout',
    component: Layout
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // 首页
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        // 项目监管
        path: 'projectSupervision',
        name: 'ProjectSupervision',
        component: ProjectSupervision,
        children:[
          {
            path:'projectlist',
            name:'projectListInProjectSupervision',
            component:ProjectListInProjectSupervision,
          }
        ],
      },
      {
        // 企业管理
        path: 'companyManage',
        name: 'CompanyManage',
        component: CompanyManage
      },
      {
        // 企业管理 -> 查看详情
        path: 'companyDetail',
        name: 'CompanyDetail',
        component: CompanyDetail
      },
      {
        // 考勤监管
        path: 'timeSupervision',
        name: 'TimeSupervision',
        component: TimeSupervision
      },
      {
        // 专户监管
        path: 'specialaccount',
        name: 'Specialaccount',
        component: SpecialAccount
      },
      {
        // 工资足额发放监管
        path: 'fullPaymentSup',
        name: 'FullPaymentSup',
        component: FullPaymentSup
      },
      {
        // 工资足额发放监管
        path: 'fullPaymentSupDetail',
        name: 'FullPaymentSupDetail',
        component: FullPaymentSupDetail
      },
      {
        // 工程保证金和支付担保监管
        path: 'depositAndPaySup',
        name: 'DepositAndPaySup',
        component: DepositAndPaySup
      },
      {
        // 维权信息监管
        path: 'rightsInfoSup',
        name: 'RightsInfoSup',
        component: RightsInfoSup
      },
      {
        // 施工过程结算
        path: 'projectProcessSup',
        name: 'ProjectProcessSup',
        component: ProjectProcessSup
      },
      {
        // 施工许可证
        path: 'constructionLicense',
        name: 'ConstructionLicense',
        component: ConstructionLicense
      },
      {
        // 项目一张图管理
        path: 'mapProjectManagement/index',
        name: 'mapProjectManagement',
        component: mapProjectManagement
      },
      {
        // 企业监管系统
        path: 'integritySupervision/enterprise',
        name: 'integritySupervision',
        component: enterprise,
      },
      {
        // 个人监管系统
        path: 'integritySupervision/personal',
        name: 'integritySupervisionPersonal',
        component: personal,
      },
      {
        // 黑名单系统
        path: 'integritySupervision/blackList',
        name: 'blackList',
        component: blackList,
      },
      {
        // 预警系统
        path: 'warningSystem/index',
        name: 'warningSystem',
        component: warningSystem,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
