<template>
    <div>
        <span class="tittle">{{tittle}}</span>
        <div :class="{line:true, line2:!showSearch}"></div>

        <slot v-if="showSearch"><a-input class="searchInput" :placeholder='placeholder' /><a-button type="primary" @click="btnclick">{{btnTittle}}</a-button></slot>

    </div>
</template>

<script>
    export default {
        name: "TittleInfoCmp",
        props:{
            // 标题
            tittle: {
                type: String,
                required: true,
            },

            showSearch:{
                type: Boolean,
                default: true,
            },

            placeholder:{
                type: String,
                default: '项目名称'
            },
            btnTittle:{
                type: String,
                default: '查询'
            },
        },
        methods:{
            btnclick(){
                this.$emit('searchclick', 'kkk');
            }
        }
    }
</script>

<style scoped>

    .tittle{
        color: #000000D9;
        font-size: 16px;
        font-family:PingFangSC-Medium, PingFang SC;
        font-weight:500;
    }

    .line{
        background-color: #e8e8e8ff;
        height: 1px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    .line2{
        /*background-color: red;*/
        margin-bottom: 20px;
    }
    .searchInput{
        width: 150px;
        margin-right: 17px;
        margin-top: 10px;
        margin-bottom: 20px;
    }
</style>
