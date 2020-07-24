<template>
    <div> 
        <a-modal
            id="dialogBox_width_add"
            :width="1040"
            :footer="null"
            v-model="dialogBoxChild.dialogBoxFather"
            :title="this.titleText"
            @ok="handleConfirm"
            @cancel='cancelCall'>
                    <a-form :form="form">
            <a-row type="flex" justify="center">
                <a-col :span='20'>
                    <a-form-item label="预警类型" v-bind="formItemLayout">
                        <a-select
                            placeholder="A"
                            v-decorator="['warnType', { rules: [{ required: true, message: '请选择预警类型' }]}]"
                        >
                            <a-select-option v-for="(item,index) in integrityLevelList" :key='index' :value="item.dictCode">{{ item.dictName }}</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="预警标题" v-bind="formItemLayout">
                            <a-input
                                placeholder="请输入预警标题"
                                v-decorator="['projectName', { rules: [{ required: true, message: '请输入预警标题' }]}]"
                            >
                            </a-input>
                        </a-form-item>
                    <a-form-item label="内容" v-bind="formItemLayout">
                        <a-textarea
                            placeholder="内容"
                            :autosize="{ minRows: 6, maxRows: 10 }"
                            v-decorator="['introduction', { rules: [{ required: false, max: 1000, message: '最大1000字符' }] }]"
                        />
                    </a-form-item>
                    </a-col>
                </a-row>
                    <!-- <a-form-item label="简介" v-bind="formItemLayout">
                        <a-textarea
                            placeholder="简介"
                            :autosize="{ minRows: 6, maxRows: 10 }"
                            v-decorator="['introduction', { rules: [{ required: false, max: 1000, message: '最大1000字符' }] }]"
                        />
                    </a-form-item> -->
                </a-form>
            <a-row>
                <a-col style="text-align: center;">
                    <a-button type="primary" @click="handleConfirm()">保存</a-button>
                </a-col>
            </a-row>
        </a-modal>
    </div>
</template>
<script>
import dictCode from '../../../utils/code.js';
export default {
    name:'',
    filters:{},
    components: {},
    mixins:[],
    data() {
        return {
            loading:false,
            formValidate:{
                    name: '',
            },
            addDialogType:'',
            form: this.$form.createForm(this),
            integrityLevelList:[],
            //企业名称的接口
            unitList: [],
            unitListName: null,
            formItemLayout: {
                labelCol: {
                xs: { span: 24 },
                sm: { span: 7 }
                },
                wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 }
                }
            },
        }
    },
    props:{
        dialogBoxChild:{
            type: Object,
            default:()=>{
                return {
                    dialogBoxFather:false,
                    dialogType:''
                };
            }
        }
    },
    computed: {},
    watch: {

    },
    computed: {
        titleText(){
            let dialogType = this.dialogBoxChild.dialogType || 'w';
            if(dialogType ==='w'){
                return '新增预警';
            }else{
                return '新增预警';
            }
        },
    },

    created() {
        console.log(this.dialogBoxChild,'add');
        this.addDialogType =this.dialogBoxChild.dialogType;
    },

    mounted() {
        this.dictCode()
    },

    methods: {
        handleConfirm() {
            let fromData = this.form.getFieldsValue()
            console.log(fromData)
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    this.$post("/paymentsupervision/earlywarn/add", fromData)
                    .then((res)=>{
                        console.log(res,'返回')
                        if(res.status == '200' || res.data){
                            this.$message.success('新增成功');
                            this.dialogBoxChild.dialogBoxFather = false;
                        }else{
                            this.$message.error('新增失败');
                        }
                    })
                }
            })
        },
        dictCode(){
            let f = JSON.parse(sessionStorage.getItem('dictCodeList'));
            this.integrityLevelList = f['INTEGRITY_LEVEL'];
            console.log(f)
        },
        handleSearch(value) {
            this.fetch(value, data => (this.data = data));
        },
        handleChange(value,option) {
            console.log(value,option);
            // this.unitListName = value;
            this.fetch(value, data => (this.data = data));
        },
        selectFun(value){
            this.form.setFieldsValue({'legalPersonName':value.legalPersonName})
        },
        fetch(value){
            this.$get("/paymentsupervision/generalContract/generalContractNameList", {'generalContractName':value})
                .then((res)=>{
                    console.log(res,'企业')
                    if(res.status == '200'){
                        this.unitList =res.data 
                    }
                })
        },
        onChange(val){

        },
        cancelCall(){
            console.log('取消回掉')
        },
        handleSubmit(){
            
        },
        addData(){
            this.$get("/paymentsupervision/integrity/save", {})
            .then((res)=>{
                if(res){

                }
            })
        },
        onSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
        },
    }
}
</script>
<style>
#dialogBox_width_add .ant-form-item-control-wrapper{
    /* display: inline-block; */
    /* width:50%; */
}
#dialogBox_width_add .ant-form-item-label{
    /* width: 168px; */
}
</style>