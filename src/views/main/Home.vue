<template>
  <div id="home">
    首页
  </div>
</template>

<script>
  import {HomeInterfaces} from "../../api/interfaces/home";

  export default {
    data() {
      return {
        usersInfo: {}
      }
    },
    mounted() {
      this.getUserInfo();
    },
    methods: {
      getUserInfo() {
        this.$http.post(HomeInterfaces.usersinfo, {}).then(res => {
          console.log(res.data, 'usersInfoResult');
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  #home {
    background: #ffffff;
  }
</style>
