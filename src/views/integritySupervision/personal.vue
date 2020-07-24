<template>
    <div class="title-head">
        <a-row type="flex" justify="space-between" align="top">
            <a-col>
                <span class="title-left">个人诚信管理</span>
            </a-col>
            <a-col>
                <a-button type="warning" @click="dialogFun()">新增</a-button>
            </a-col>
        </a-row>
        <a-divider class="divider-line" />
        <a-form-model ref="formInline"  id="form-inline-item-enterprise" >
                <div class="left-search-input">
                    <a-form-model-item>
                        <a-input v-model="generalName" placeholder="请输入姓名"></a-input>
                    </a-form-model-item>                
                </div>
                <div class="center-search-button">
                    <a-form-model-item>
                        <a-button type="primary"  @click="queryList()">查询</a-button>
                    </a-form-model-item>
                </div>

        </a-form-model>
        <div class="tab-list-data">
            <a-tabs default-active-key="1" >
                <a-tab-pane tab="全部" key="1">
                    <a-table  :pagination="false" :columns="columns" :data-source="datalist"  bordered>
                        <template slot="action" slot-scope="record,index">
                                <a @click="handleClick(record)" >查看</a>
                        </template>
                    </a-table>
                    <a-row  id="page_style">
                        <a-col>
                            <a-pagination
                                v-model="pageSizeTool.curpage"
                                :page-size-options="pageSizeTool.pageSizeOptions"
                                :total="pageSizeTool.total"
                                show-size-changer
                                show-quick-jumper
                                :page-size="pageSizeTool.percount"
                                @change="onChange"
                                @showSizeChange="onShowSizeChange"
                            >
                            </a-pagination>
                        </a-col>
                    </a-row>
                </a-tab-pane>
            </a-tabs>
        </div>
        <!-- <add-dialog :dialogBoxChild='dialogBox'></add-dialog> -->
        <p-add :dialogBoxChild='dialogBox'></p-add>
        <detail-dialog :dialogDetailChild='dialogDetail'></detail-dialog>
    </div>
</template>
<script>
//继承新增企业的弹窗组件
// import addDialog from './components/add.vue';
//个人新增
import pAdd from './components/pAdd.vue';
//继承详情的查看
import detailDialog from './components/detail.vue';
export default {
    name:'personal',
    extends:{
        // detailDialog,
        // addDialog
    },
    components: {
        // addDialog,
        detailDialog,
        pAdd,
    },
    mixins:[],
    data() {
        return {
                generalName:'',
                columns:[
                        {
                            title: '编号',
                            key: '1 ',
                            dataIndex: 'integrityId',
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
                            title: '诚信记录',
                            key: '6',
                            dataIndex: 'integrityLevel',
                            align: 'center',
                        },
                        {
                            title: '诚信来源',
                            key: '7',
                            dataIndex: 'integrityFrom',
                            align: 'center',
                        },
                        {
                            title: '奖惩文书',
                            key: '8',
                            dataIndex: 'rewardFile',
                            align: 'center',
                        },
                        {
                            title: '列入日期',
                            key: '9',
                            dataIndex: 'joinDate',
                            align: 'center',
                        },
                        {
                            title: '列入事由',
                            key: '10',
                            dataIndex: 'joinReason',
                            align: 'center',
                        },
                        // {
                        //     title: '状态',
                        //     key: '12',
                        //     dataIndex: 'status',
                        //     align: 'center',
                        // },
                        {
                            title: '操作',
                            key: '14',
                            scopedSlots: { customRender: 'action' },    //这一行自定义渲染这一列
                            align: 'center',
                        }
                ],
                pageSizeTool:{
                    pageSizeOptions: ['10', '20', '30', '40', '50'],
                    curpage: 1,
                    percount:10,
                    total: 0,
                },
                datalist:[],
                generalContractName:'',
                dialogBox:{
                    dialogBoxFather:false,
                    dialogType:'p' //组件分类标识 e 企业 p 个人 b 黑名
                },
                dialogDetail:{
                    dialogDetailFather:false,
                    dialogType:'p', //组件分类标识 e 企业 p 个人 b 黑名
                }
        }
    },
    computed: {},
    watch: {
            
    },
    created() {

    },
    mounted() {
        this.getCodeData()
    },
    methods: {
        getCodeData(param){
            let data = param||{}
            this.$get("/paymentsupervision/integrity/personalList", data)
            .then((res)=>{
                if(res.rows){
                    let list = res.rows || []; 
                    this.datalist = list;
                    this.pageSizeTool.total = res.total;
                }
                console.log(res,'..............')
            })
        },
        dialogFun(){
            this.dialogBox.dialogBoxFather= true;
            // console.log(this,'this')
        },
        onShowSizeChange(current, pageSize){
            this.pageSizeTool.percount = pageSize;
            this.pageSizeTool.curpage =current;
            this.pageSizeTool.workerName = this.generalName;
            delete this.pageSizeTool.pageSizeOptions;
            delete this.pageSizeTool.total;
            this.getCodeData(this.pageSizeTool);
            console.log(this.pageSize,current);
        },
        onChange(page, pageSize){
            this.pageSizeTool.curpage = page; 
            this.pageSizeTool.percount = pageSize;
            delete this.pageSizeTool.pageSizeOptions;
            delete this.pageSizeTool.total;
            this.pageSizeTool.workerName = this.generalName || ''
            this.getCodeData(this.pageSizeTool);
            this.pageSizeTool.workerName = this.generalName;
            console.log(page,this.generalName, pageSize,this.pageSizeTool)

        },
        queryList(){
            delete this.pageSizeTool.pageSizeOptions;
            delete this.pageSizeTool.total;
            this.pageSizeTool.curpage= 1;
            this.pageSizeTool.percount=15;
            this.pageSizeTool.workerName = this.generalName;
            console.log(this.generalName)
            this.getCodeData(this.pageSizeTool)
        },
        handleClick(val){
            this.dialogDetail.dialogDetailFather= true;
            this.dialogDetail.list = val;
            console.log(val,this.dialogDetail)
        },
    }
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
#page_style{
    text-align: end;
    margin: 8px;
}
</style>
<style>
#page_style .ant-select-enabled{
    margin-right:0px;
}
</style>