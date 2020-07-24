<template>
  <div class="bgdiv">
    <div id="navfuncs" class="top-nav">
      <div class="top-nav-info" @click="service11">客服中心</div>
      <div class="top-nav-info" @click="environ">环境监测</div>
      <div class="top-nav-info" @click="policy">政策宣传</div>
      <div class="top-nav-info" @click="nav11">导航</div>
      <!--        <div class="mainfuncs funcs1" @click="first">监管平台</div>-->
    </div>
    <div class="infobg">
      <div class="bigtittle"></div>
      <div id="mainfuncs" class="funbg">
        <div class="mainfuncs funcs1" @click="first">监管平台</div>
        <div class="mainfuncs funcs2" @click="second">农民工查询平台</div>
        <div class="mainfuncs funcs3" @click="third">企业平台</div>
        <div class="mainfuncs funcs4" @click="fourth">信用公示平台</div>
      </div>
    </div>
    <div class="bottom-info">主办单位：榆阳区人力资源和社会保障局   技术支持单位：陕西金石联动网络科技有限公司</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        token: '111'
      }
    },
    mounted() {
      if (!this.token) this.$router.push('/');

    },
    methods: {
      service11:()=>{
        console.log('serviceservice')

      },
      first:()=>{
        console.log('111')
      },
      second:()=>{
        console.log('22')

      },
      third:()=>{
        console.log('333')

      },
      fourth:()=>{
        console.log('444')

      },
    }
  }
</script>

<style scoped lang="scss">
  /*body{*/
  /*  margin: 0;*/
  /*}*/
  .bgdiv{
    min-width: 1500px;
    height: 1080px;
    background-image: url("../../assets/big-image/bg.png");
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    /*padding-top: 56px;*/
    /*border-width: 0;*/
    /*新增*/
    border-top: 1px solid red;
  }
  .top-nav{
    position: relative;
    /*top: 56px;*/
    margin-top: 56px;
    width: 322px;
    left: 100%;
    margin-left: -422px;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    /*background-color: red;*/
  }
  .top-nav-info{

    font-size: 17px;
    color: white;
    /*height: 50px;*/
    /*background-color: red;*/
  }

  .infobg{
    position: relative;
    padding-top:144px;
  }

  .bigtittle{
    width: 991px;
    height: 257px;
    background-image: url("../../assets/images/bigtittle.png");
    background-repeat: no-repeat;
    position: relative;
    left: 50%;
    margin-left: -495px;

  }
  .funbg{
    width: 1256px;
    position: relative;
    left: 50%;
    margin-left: -628px;
    margin-top: 74px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .mainfuncs{
    width: 254px;
    background-repeat: no-repeat;
    /*220 图片 60间距*/
    padding-top: 280px;
    font-size: 35px;

    text-align: center;
    color: white;
  }
  .funcs1{
    background-image: url("../../assets/images/1.png");
  }
  .funcs2{
    background-image: url("../../assets/images/2.png");
  }
  .funcs3{
    background-image: url("../../assets/images/3.png");
  }
  .funcs4{
    background-image: url("../../assets/images/4.png");
  }
  .bottom-info{
    position: absolute;
    bottom: 78px;
    color: white;
    font-size: 20px;
    left: 0px;
    right: 0px;
    text-align: center;
  }
</style>
