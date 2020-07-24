<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider v-model="collapsed" collapsible @collapse="onCollapse" width="256px">
        <div class="logo">
          <p v-if="show_logo_text">监管平台</p>
        </div>
        <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
          <a-menu-item key="1">
            <router-link to="/dashboard/home">
              <a-icon type="home" />
              <span>首页</span>
            </router-link>
          </a-menu-item>

          <a-sub-menu key="2">
            <span slot="title">
              <a-icon type="user" />
              <span>工程监管系统</span>
            </span>

            <a-menu-item key="201">
              <router-link to="/dashboard/projectSupervision">项目监管</router-link>
            </a-menu-item>

            <a-menu-item key="202">
              <router-link to="/dashboard/companyManage">企业管理</router-link>
            </a-menu-item>

            <a-sub-menu key="203">
              <span slot="title">
                <span>实名制监管</span>
              </span>

              <a-menu-item key="20301">
                <!--                <router-link to="/dashboard/sub1">-->
                实名制监管
                <!--                </router-link>-->
              </a-menu-item>

              <a-menu-item key="20302">
                <router-link to="/dashboard/timeSupervision">考勤监管</router-link>
              </a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="204">
              <span slot="title">
                <span>专户和工资足额发放监管</span>
              </span>

              <a-menu-item key="20401">
                <router-link to="/dashboard/specialaccount">专户监管</router-link>
              </a-menu-item>

              <a-menu-item key="20402">
                <router-link to="/dashboard/fullPaymentSup">工资足额发放监管</router-link>
              </a-menu-item>
            </a-sub-menu>

            <a-menu-item key="205">
              <router-link to="/dashboard/depositAndPaySup">工程保证金和支付担保监管</router-link>
            </a-menu-item>

            <a-menu-item key="206">
              <router-link to="/dashboard/rightsInfoSup">维权信息监管</router-link>
            </a-menu-item>

            <a-menu-item key="207">
              <router-link to="/dashboard/projectProcessSup">施工过程结算</router-link>
            </a-menu-item>

            <a-menu-item key="208">
                <router-link to="/dashboard/ConstructionLicense">施工许可证</router-link>
            </a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="3">
            <span slot="title">
              <a-icon type="user" />
              <span>项目一张图管理</span>
            </span>

            <a-menu-item key="301">
              <router-link to="/dashboard/mapProjectManagement/index">项目施工地图</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub1">
            <span slot="title"><span>诚信监管系统</span></span>
            <a-menu-item key="5">
               <router-link to="/dashboard/integritySupervision/enterprise">企业诚信管理</router-link>
            </a-menu-item>
            <a-menu-item key="6">
               <router-link to="/dashboard/integritySupervision/personal">个人诚信管理</router-link>
            </a-menu-item>
            <a-menu-item key="7">
               <router-link to="/dashboard/integritySupervision/blackList">黑名单管理</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="11">
            <span slot="title"><span>预警系统处理</span></span>
            <a-menu-item key="5">
               <router-link to="/dashboard/warningSystem/index">预警系统处理</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <!--        {-->
      <!--        },-->
      <!--        {-->
      <!--        // 工程保证金和支付担保监管-->
      <!--        path: '',-->
      <!--        name: 'DepositAndPaySup',-->
      <!--        component: DepositAndPaySup-->
      <!--        },-->
      <!--        {-->
      <!--        // 维权信息监管-->
      <!--        path: '',-->
      <!--        name: 'RightsInfoSup',-->
      <!--        component: RightsInfoSup-->
      <!--        },-->

      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-row>
            <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="6" :xxl="6">Col</a-col>
            <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="6" :xxl="6">Col</a-col>
            <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="6" :xxl="6">Col</a-col>
            <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="6" :xxl="6">用户名</a-col>
          </a-row>
        </a-layout-header>

        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>工作台</a-breadcrumb-item>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
          </a-breadcrumb>

          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <router-view />
          </div>
        </a-layout-content>

        <a-layout-footer style="text-align: center">Ant Design ©2020 Created by Ant UED</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "token",
      collapsed: false,
      show_logo_text: true
    };
  },
  mounted() {
    if (!this.token) this.$router.push("/login");
  },
  methods: {
    onCollapse(collapsed) {
      if (collapsed) this.show_logo_text = false;
      else this.show_logo_text = true;
    }
  }
};
</script>

<style scoped lang="scss">
.logo {
  font-size: 28px;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
</style>
<style>
#components-layout-demo-side .logo {
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 60px;
  padding: 10px;
  text-align: center;
}
</style>
