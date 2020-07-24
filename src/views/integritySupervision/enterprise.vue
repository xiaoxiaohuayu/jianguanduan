<template>
    <div class="title-head">
        <a-row type="flex" justify="space-between">
            <a-col>
                <span class="title-left">企业诚信管理</span>
            </a-col>
            <a-col>
                <a-button type="warning" @click="dialogFun()">新增</a-button>
            </a-col>
        </a-row>
        <a-divider class="divider-line" />
        <a-form-model ref="formInline" id="form-inline-item-enterprise" >
                <div class="left-search-input">
                    <a-form-model-item>
                        <a-input v-model="generalName" placeholder="企业名称"></a-input>
                    </a-form-model-item>                
                </div>
                <div class="center-search-button">
                    <a-form-model-item>
                        <a-button type="primary" @click="queryList()">查询</a-button>
                    </a-form-model-item>
                </div>

        </a-form-model>
        <div class="tab-list-data">
            <a-tabs default-active-key="1" >
                <a-tab-pane tab="全部" key="1">
                    <!-- :pagination="pageTool" :pagination="false" //去除自带分页器:span='14' :offset='10' -->
                    <a-table  :pagination="false" :rowKey="(record,index)=> index" :columns="columns" :data-source="datalist"  bordered>
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
                                :page-size="pageSizeTool.percount"
                                @change="onChange"
                                @showSizeChange="onShowSizeChange"
                                show-size-changer
                                show-quick-jumper
                            >
                            </a-pagination>
                        </a-col>
                    </a-row>

                </a-tab-pane>
            </a-tabs>
        </div>
        <add-dialog :dialogBoxChild='dialogBox'></add-dialog>
        <detail-dialog :dialogDetailChild='dialogDetail'></detail-dialog>
    </div>
</template>
<script>
//新增企业的弹窗组件
import addDialog from './components/add.vue';
//详情的查看
import detailDialog from './components/detail.vue';
export default {
    name:'',
    filters:{},
    components: {
        addDialog,
        detailDialog
    },
    mixins:[],
    data() {
        return {
                generalName:'',
                dialogBox:{
                    dialogBoxFather:false,
                    dialogType:'e' //组件分类标识 e 企业 p 个人 b 黑名单
                },
                dialogDetail:{
                    dialogDetailFather:false,
                    dialogType:'e', //组件分类标识 e 企业 p 个人 b 黑名
                },
                columns:[
                        {
                            title: '编号',
                            key: '1 ',
                            dataIndex: 'integrityId',
                            align: 'center'
                        },
                        {
                            title: '企业名称',
                            key: '2',
                            dataIndex: 'generalContractName',
                            align: 'center',
                        },
                        {
                            title: '法定代表人',
                            key: '3',
                            dataIndex: 'legalPersonName',                            
                            align: 'center',
                        },
                        {
                            title: '责任人',
                            key: '4',
                            dataIndex: 'responsible',
                            
                            align: 'center',
                        },
                        {
                            title: '统一社会信用代码',
                            key: '5',
                            dataIndex: 'creditCode',
                            align: 'center',
                        },
                        {
                            title: '诚信记录',
                            key: '6',
                            dataIndex: 'createUser',
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
                        {
                            title: '权利救济期限和途径',
                            key: '11',
                            dataIndex: 'createUser',
                            align: 'center',
                        },
                        // {
                        //     title: '状态',
                        //     key: '12',
                        //     dataIndex: 'status',
                        //     align: 'center',
                        // },
                        {
                            title: '做出决定机关',
                            key: '13',
                            dataIndex: 'decisionOffice',
                            align: 'center',
                        },
                        {
                            title: '操作',
                            key: '14',
                            scopedSlots: { customRender: 'action' },    //这一行自定义渲染这一列
                            align: 'center',
                        }
                ],
                datalist:[],
                // current当前条数   pageSize 每页条数 showTotal用于显示数据总量和当前数据顺序 total数据总数 showSizeChange	pageSize 变化的回调
                pageSizeTool:{
                    pageSizeOptions: ['15', '20', '30', '40', '50'],
                    curpage: 1,
                    percount:15,
                    total: 0,
                },
                //独立分页组件

                // pageTool:{
                //     total: 0,
                //     defaultPageSize:10,
                //     showTotal: total => `共 ${total} 条数据`,
                //     showSizeChanger:true,
                //     pageSizeOptions: ['10', '20', '30', '50'],
                //     onShowSizeChange:(current, pageSize)=>{ this.pageSizeTool.percount = pageSize; this.pageSizeTool.current =current; this.getCodeData(this.pageSizeTool);console.log(this.pageSize,current)},
                //     onChange:(page, pageSize)=>{ this.pageSizeTool.current = page; this.pageSizeTool.percount = pageSize; this.getCodeData(this.pageSizeTool);console.log(page, pageSize,this.pageSizeTool)}
                // },
        }
    },
    computed: {},
    watch: {
            
    },
    beforeCreate() {},
    created() {
    },
    beforeMount() {},
    mounted() {
        this.getCodeData()
    },
    methods: {
        onShowSizeChange(current, pageSize){
            this.pageSizeTool.percount = pageSize;
            this.pageSizeTool.curpage =current;
            this.pageSizeTool.generalContractName = this.generalName;
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
            this.pageSizeTool.generalContractName = this.generalName || ''
            this.getCodeData(this.pageSizeTool);
            this.pageSizeTool.generalContractName = this.generalName;
            console.log(page,this.generalName, pageSize,this.pageSizeTool)

        },
        getCodeData(param){
            let data = param||{}
            console.log(data,'!!!!!!!!!!!!!!!!!!!!!!')
            this.$get("/paymentsupervision/integrity/list", data)
            .then((res)=>{
                if(res.rows){
                    let list = res.rows || [];
                    this.pageSizeTool.total = res.total;
                    // this.pageTool. = res.size;
                    // this.datalist = []
                    this.datalist = list;
                }
                console.log(res,'..............')
            })
        },
        queryList(){
            // this.pageSizeTool.current= 1;
            // let queryData = {
            //     generalContractName: this.generalName || '',
            //     percount:'10',
            //     current:'0',
            // }
            delete this.pageSizeTool.pageSizeOptions;
            delete this.pageSizeTool.total;
            this.pageSizeTool.curpage= 1;
            this.pageSizeTool.percount=15;
            this.pageSizeTool.generalContractName = this.generalName;
            console.log(this.generalName)
            this.getCodeData(this.pageSizeTool)
        },
        dialogFun(){
            this.dialogBox.dialogBoxFather= true;
        },
        handleClick(val){
            this.dialogDetail.dialogDetailFather= true;
            this.dialogDetail.list = val;
            console.log(val,this.dialogDetail)
        },
    },

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