<template>
    <div class="title-head">
        <a-row type="flex" justify="space-between">
            <a-col>
                <span class="title-left">黑名单管理</span>
            </a-col>
            <a-col>
                <a-button type="warning" @click="dialogFun()">新增</a-button>
            </a-col>
        </a-row>
        <a-divider class="divider-line" />
        <a-form-model ref="formInline"  id="form-inline-item-enterprise" >
                <div class="left-search-input">
                    <a-form-model-item>
                        <a-input v-model="generalName" placeholder="企业名称"></a-input>
                    </a-form-model-item>
                </div>
                <div class="center-search-button">
                    <a-form-model-item>
                        <a-button type="primary">查询</a-button>
                        <!-- <a-button type="primary" @click="lookFun()">查看</a-button> -->
                    </a-form-model-item>
                </div>

        </a-form-model>
        <div class="tab-list-data">
            <a-tabs default-active-key="1" >
                <a-tab-pane tab="黑名单个人列表" key="1">
                    <a-table :columns="columns" :data-source="datalist"  bordered>
                        <template slot="action" slot-scope="record,index">
                                <a @click="handleClick(record)" class="operating_btn">移除</a>
                                <a @click="handleClick(record)" class="operating_btn">查看</a>
                                <a @click="handleClick(record)" class="operating_btn">发布</a>
                        </template>
                    </a-table>
                </a-tab-pane>
                <a-tab-pane tab="黑名单企业列表" key="2">
                    <a-table :columns="entColumns" :data-source="datalists"  bordered>
                        <template slot="action" slot-scope="record,index">
                                <a @click="handleClick(record)" class="operating_btn">移除</a>
                                <a @click="handleClick(record)" class="operating_btn">查看</a>
                                <a @click="handleClick(record)" class="operating_btn">发布</a>
                        </template>
                    </a-table>
                </a-tab-pane>
            </a-tabs>
        </div>
        <b-add :dialogBoxChild='dialogBox'></b-add>
        <detail-dialog :dialogDetailChild='dialogDetail'></detail-dialog>
    </div>
</template>
<script>
//新增企业的弹窗组件
// import addDialog from './components/add.vue';
//黑名单个人新增
import bAdd from './components/bAdd.vue';
//详情的查看
import detailDialog from './components/detail.vue';

export default {
    name:'',
    filters:{},
    components: {
        // addDialog,
        bAdd,
        detailDialog
    },
    mixins:[],
    data() {
        return {
                generalName:'',
                 // 个人
                columns:[
                        {
                            title: '编号',
                            key: '1 ',
                            dataIndex: 'blacklistId',
                            align: 'center'
                        },
                        {
                            title: '姓名',
                            key: '2',
                            dataIndex: 'workerName',
                            align: 'center',
                        },
                        {
                            title: '身份证号',
                            key: '3',
                            dataIndex: 'identityCode',                            
                            align: 'center',
                        },
                        {
                            title: '性别',
                            key: '6',
                            dataIndex: 'workerSex',
                            align: 'center',
                        },
                        {
                            title: '年龄',
                            key: '7',
                            dataIndex: 'workerAge',
                            align: 'center',
                        },
                        {
                            title: '做出决定机关',
                            key: '8',
                            dataIndex: 'decisionOffice',
                            align: 'center',
                        },
                        {
                            title: '加入原因',
                            key: '9',
                            dataIndex: 'blacklistReason',
                            align: 'center',
                        },
                        {
                            title: '加入时间',
                            key: '10',
                            dataIndex: 'blacklistDate',
                            align: 'center',
                        },
                        {
                            title: '状态',
                            key: '12',
                            dataIndex: 'status',
                            align: 'center',
                        },
                        {
                            title: '操作',
                            key: '14',
                            scopedSlots: { customRender: 'action' },    //这一行自定义渲染这一列
                            align: 'center',
                        }
                ],
                // 企业
                datalist:[],
                entColumns:[
                        {
                            title: '编号',
                            key: '1 ',
                            dataIndex: 'blacklistId',
                            align: 'center'
                        },
                        {
                            title: '企业名称',
                            key: '2',
                            dataIndex: 'generalContractName',
                            align: 'center',
                        },
                        {
                            title: '企业社会统一代码',
                            key: '3',
                            dataIndex: 'creditCode',                            
                            align: 'center',
                        },
                        {
                            title: '企业类型',
                            key: '4',
                            dataIndex: 'enterpriseType',
                            align: 'center',
                        },
                        {
                            title: '企业有效期',
                            key: '5',
                            dataIndex: 'businessLicenseValidity',
                            align: 'center',
                        },
                        {
                            title: '营业执照',
                            key: '6',
                            dataIndex: 'businessLicenseFile',
                            align: 'center',
                        },
                        {
                            title: '做出决定机关',
                            key: '7',
                            dataIndex: 'decisionOffice',
                            align: 'center',
                        },
                        {
                            title: '加入原因',
                            key: '8',
                            dataIndex: 'blacklistReason',
                            align: 'center',
                        },
                        {
                            title: '加入时间',
                            key: '9',
                            dataIndex: 'joinReason',
                            align: 'center',
                        },
                        {
                            title: '操作',
                            key: '10',
                            scopedSlots: { customRender: 'action' },    //这一行自定义渲染这一列
                            align: 'center',
                        }
                ],
                datalists:[],
                user:'',
                dialogBox:{
                    dialogBoxFather:false,
                    dialogType:'b' //组件分类标识 e 企业 p 个人 b 黑名单
                },
                dialogDetail:{
                    dialogDetailFather:false,
                    dialogType:'b' //组件分类标识 e 企业 p 个人 b 黑名单
                }
        }
    },
    computed: {},
    watch: {
            
    },
    beforeCreate() {},
    created() {
    },
    mounted() {
        this.getDatap()
        this.getDatae()
    },
    methods: {
        dialogFun(){
            this.dialogBox.dialogBoxFather= true;
            // console.log(this,'this')
        },
        lookFun(){
            this.dialogDetail.dialogDetailFather= true;

        },
        // 个人
        getDatap(param){
            let data = param||{}
            this.$get("/paymentsupervision/Blacklist/personalBlacklist", data)
            .then((res)=>{
                if(res.rows){
                    let list = res.rows || []; 
                    this.datalist = list;
                }
                console.log(res,'..............')
            })
        },
        //企业
        getDatae(param){
            let data = param||{}
            this.$get("/paymentsupervision/Blacklist/enterpriseBlacklist", data)
            .then((res)=>{
                if(res.rows){
                    let list = res.rows || []; 
                    this.datalists = list;
                }
                console.log(res,'..............')
            })
        },
    },
    beforeUpdate() {},
    updated() {}, 
    beforeDestroy() {},
    destroyed() {},
    activated() {},

}
</script>
<style scoped>
.title-head{
    padding:10px 20px;
    background: #fff;
}
.title-head .title-left{
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
}
.divider-line{
    margin: 12px 0;
}
#form-inline-item-enterprise .ivu-a-form-item{
    margin-bottom: 0px;
}
.tab-list-data{
    margin-top: 6px;
}
.left-search-input,.center-search-button{
    display: inline-block;
    margin-right: 12px;
}
.center-search-button .ant-btn{
    margin-right: 12px;
}
.left-search-input{
    width: 140px;
}
.center-search-button{
    width: 200px;
}
.operating_btn{
    margin: 0px 10px 0px 10px;
}
</style>