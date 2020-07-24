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
                <a-row>
                <a-col :span='12'>
                    <a-form-item v-if="this.addDialogType === 'e' " label="企业名称" v-bind="formItemLayout">
                        <!-- legalPersonName 法定代表人 generalContractName 单位名 -->
                        <a-select
                            placeholder="请输入企业名称"
                            show-search
                            :filterOption="false"
                            :value="unitListName"
                            :show-arrow="false"
                            :not-found-content="null"
                            @search="handleSearch"
                            @change="handleChange"
                            v-decorator="['generalContractName', { rules: [{ required: true,  message: '必填项，请选择企业' }] }]"
                        >
                            <a-select-option v-for="(d,i) in unitList" :key='i' @click="selectFun(d)">
                                {{ d.generalContractName }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>

                    <a-form-item v-else label="姓名" v-bind="formItemLayout">
                        <a-input
                            placeholder="请输入姓名"
                            v-decorator="['workerName', { rules: [{ required: true, message: '请输入姓名' }] }]"
                        />
                    </a-form-item>

                    <a-form-item v-if="this.addDialogType == 'b' " label="性别" v-bind="formItemLayout">
                        <a-select
                            placeholder="请选择性别"
                            v-decorator="['workerSex', { rules: [{ required: true, message: '请选择性别' }]}]"
                        >
                            <a-select-option value="1">男</a-select-option>
                            <a-select-option value="0">女</a-select-option>
                        </a-select>
                    </a-form-item>

                    <a-form-item v-if="this.addDialogType === 'e' " label="法定代表人" v-bind="formItemLayout">
                        <a-input
                            placeholder="请选择法定代表人"
                            disabled
                            v-decorator="['legalPersonName', { rules: [{ required: true, message: '请选择法定代表人' }]}]"
                        >
                        </a-input>
                    </a-form-item>
                    <a-form-item  v-if="this.addDialogType !== 'b' " label="诚信评级" v-bind="formItemLayout">
                        <a-select
                            placeholder="A"
                            v-decorator="['integrityLevel', { rules: [{ required: true, message: '请选择诚信评级' }]}]"
                        >
                            <a-select-option v-for="(item,index) in integrityLevelList" :key='index' :value="item.dictCode">{{ item.dictName }}</a-select-option>
                        </a-select>
                    </a-form-item>
                        <a-form-item v-if="this.addDialogType !== 'b' " label="列入日期" v-bind="formItemLayout">
                             <a-date-picker 
                                @change="onChange" 
                                format="YYYY-MM-DD"
                                placeholder="请选择列入日期"
                                v-decorator="['joinDate', { rules: [{ type: 'object', required: true, message: '请选择列入日期' }]}]"
                             />
                        </a-form-item>
                        <a-form-item v-if="this.addDialogType !== 'p'" label="做出决定机关：" v-bind="formItemLayout">
                            <a-input
                                placeholder="请选择作出决定机关"
                                v-decorator="['decisionOffice', { rules: [{ required: true, message: '请选择作出决定机关' }]}]"
                            >
                                <!-- <a-select-option value="beijing">New York</a-select-option>
                                <a-select-option value="shanghai">London</a-select-option>action="/group1/upload"
                                <a-select-option value="shenzhen">Sydney</a-select-option> -->
                            </a-input>
                        </a-form-item>
                      <a-form-item v-if="this.addDialogType !== 'b' " label="奖惩文书：" v-bind="formItemLayout">
                            <a-upload
                                multiple
                                method="post"
                                :customRequest="uploadFile"
                                @change="uploadChange"
                                v-decorator="['rewardFile', { rules: [{ message: '请上传文件' }] }]"
                                >
                                <a-button>点击上传</a-button>
                            </a-upload>
                        </a-form-item>
                    </a-col>
                    <a-col :span='12'>
                        <a-form-item v-if="this.addDialogType === 'e' " label="社会统一信用代码：" v-bind="formItemLayout">
                            <a-input
                                placeholder="请输入企业名称"
                                v-decorator="['creditCode', { rules: [{ required: true, message: '请输入企业名称' }] }]"
                                >
                            >
                            </a-input>
                        </a-form-item>
                        <a-form-item v-if="this.addDialogType !== 'e'  " label="身份证号" v-bind="formItemLayout">
                            <a-input
                                placeholder="请输入身份证号"
                                v-decorator="['identityCode', { rules: [{ required: true, message: '请输入身份证号' }] }]"
                                >
                            >
                            </a-input>
                        </a-form-item>
                        <a-form-item v-if="this.addDialogType === 'e' " label="责任人"  v-bind="formItemLayout">
                            <a-input  
                                placeholder="请输入责任人"
                                v-decorator="['responsible', { rules: [{ required: true, message: '请输入责任人' }]}]"
                                >
                            >
                            </a-input>
                        </a-form-item>
                        <a-form-item v-if="this.addDialogType !== 'b' " label="诚信来源" v-bind="formItemLayout">
                            <a-input
                                placeholder="请输入诚信来源"
                                v-decorator="['integrityFrom', { rules: [{ required: true, message: '请输入诚信来源' }]}]"
                            >
                            </a-input>
                        </a-form-item>
                        <a-form-item v-if="this.addDialogType !== 'b' " label="列入事由" v-bind="formItemLayout">
                            <a-input
                                placeholder="请输入列入事由"
                                v-decorator="['joinReason', { rules: [{ required: true, message: '请输入列入事由' }] }]"
                            ></a-input>
                        </a-form-item>
                        <a-form-item v-if="this.addDialogType == 'b' " label="年龄" v-bind="formItemLayout">
                            <a-input
                                placeholder="请输入年龄"
                                v-decorator="['workerAge', { rules: [{ required: true, message: '请输入年龄' }] }]"
                            ></a-input>
                        </a-form-item>
                        <a-form-item v-if="this.addDialogType == 'b' " label="加入原因" v-bind="formItemLayout">
                            <a-input
                                placeholder="请输入原因"
                                v-decorator="['blacklistReason', { rules: [{ required: true, message: '请输入原因' }] }]"
                            ></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
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
            addDialogType:'',
            generalContractName:'',
            form: this.$form.createForm(this),
            integrityLevelList:[],
            //企业名称的接口
            unitList: [],
            unitListName: null,
            fileLists:[],
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
            let dialogType = this.dialogBoxChild.dialogType || 'e';
            if(dialogType ==='e'){
                return '新增企业诚信';
            }else if(dialogType === 'p'){
                return '新增个人诚信';
            }else{
                return '新增个人黑名单';
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
            let fromData = this.form.getFieldsValue();
            console.log(fromData,'SSSSSSSSSSSSSSSSSS')
            fromData.generalContractName = this.generalContractName;
            //这里的单位名称generalContractName  使用setFieldsValue 赋值不了，用中间键获取
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    this.$post("/paymentsupervision/integrity/save", fromData)
                    .then((res)=>{
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
        },
        handleSearch(value) {
            this.fetch(value, data => (this.data = data));
        },
        handleChange(value,option) {
            // this.unitListName = value;
            this.fetch(value, data => (this.data = data));
        },
        selectFun(value){
            this.form.setFieldsValue({'legalPersonName':value.legalPersonName})
            // console.log(value,value.generalContractName)
            this.generalContractName = value.generalContractName;
            // this.form.setFieldsValue({'generalContractName':value.generalContractName})
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
        uploadFile(file){
            let formData = new FormData();
                formData.append('file', file.file);
                formData.append('output', 'json');
            console.log(file,'333');
            this.$post("/group1/upload", formData)
                .then((res)=>{
                    console.log(res,'上传返回')
                    if(res.status == '200'){
                        this.uploadChange()
                        // this.fileList.push(res)
                    }
                })
        },
        uploadChange(info){
            this.fileLists = info.fileList;
            console.log(info,'文件');
        if (info.file.status === 'done') {
            this.$message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            this.$message.error(`${info.file.name} file upload failed.`);
        }
        // this.fileLists.push(info.fileList)
            console.log(this.fileLists,info.fileList)
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