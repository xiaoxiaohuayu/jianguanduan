<template>
    <div> 
        <a-modal
            v-model="dialogDetailChild.dialogDetailFather"
            :title="this.detailTitleText"
            :width="1040"
            @ok="asyncOK"
            @cancel='cancelCall'>
            <a-form-model ref="formValidate">
                <a-row>
                <a-col :span="8">
                        <a-form-item v-if="this.detailDialogType === 'e' " label="企业名称：" v-bind="formItemLayout">
                            {{formValidate.createUser}}
                        </a-form-item>
                        <a-form-item v-else label="姓名"  v-bind="formItemLayout">
                            {{formValidate.createUser}}
                        </a-form-item>
                        <a-form-item v-if="this.detailDialogType === 'e' " label="责任人："  v-bind="formItemLayout">
                            {{formValidate.responsible}}
                        </a-form-item>
                        <a-form-item label="列入日期："  v-bind="formItemLayout">
                            {{formValidate.joinDate}}
                        </a-form-item>
                        <a-form-item v-if="this.detailDialogType === 'e' " label="权利救济期限和途径："  v-bind="formItemLayout">
                            {{formValidate.responsible}}
                        </a-form-item>
                        <a-form-item label="审核意见："  v-bind="formItemLayout">
                            {{formValidate.responsible}}
                        </a-form-item>
                        <a-form-item  v-if="this.detailDialogType === 'p'" label="奖惩文书："  v-bind="formItemLayout">
                            {{formValidate.responsible}}
                        </a-form-item>
                </a-col>

                <a-col :span="8">
                        <a-form-item label="社会统一信用代码："  v-bind="formItemLayout">
                            {{formValidate.creditCode}}
                        </a-form-item>
                        <a-form-item label="诚信记录："  v-bind="formItemLayout">
                            {{formValidate.responsible}}
                        </a-form-item>
                        <a-form-item label="列入事由："  v-bind="formItemLayout">
                            {{formValidate.joinReason}}
                        </a-form-item>
                        <a-form-item v-if="this.detailDialogType === 'e'" label="奖惩文书："  v-bind="formItemLayout">
                            {{formValidate.responsible}}
                        </a-form-item>
                        <!-- <a-form-item label="权利救济期限和途径："  v-bind="formItemLayout">
                            {{formValidate.responsible}}
                        </a-form-item> -->
                </a-col>
                <a-col :span="8">
                        <a-form-item v-if="this.detailDialogType === 'e' " label="法定代表人："  v-bind="formItemLayout">
                            {{formValidate.legalPersonName}}
                        </a-form-item>
                        <a-form-item label="诚信来源："  v-bind="formItemLayout">
                            {{formValidate.responsible}}
                        </a-form-item>
                        <a-form-item v-if="this.detailDialogType === 'e' " label="作出决定机关："  v-bind="formItemLayout">
                            {{formValidate.decisionOffice}}
                        </a-form-item>
                        <a-form-item label="状态："  v-bind="formItemLayout">
                            {{formValidate.status}}
                        </a-form-item>
                        <!-- <a-form-item label="权利救济期限和途径：" v-bind="formItemLayout" >
                            {{formValidate.responsible}}
                        </a-form-item> -->
                </a-col>
            </a-row>
            </a-form-model>
                <a-form>
                    <a-row>
                        <a-col :span="20">
                            <a-form-model ref="formButton"  :labelCol="{span: 4}" :wrapperCol="{ span: 20 }">
                                <a-form-item label="处理意见" >
                                    <a-textarea type="textarea" :rows="4" placeholder="请输入处理意见" />
                                </a-form-item>
                            </a-form-model>
                        </a-col>
                    </a-row>
                </a-form>        
        </a-modal>
    </div>
</template>
<script>
export default {
    name:'',
    filters:{},
    components: {},
    mixins:[],
    data() {
        return {
            loading:false,
            detailDialogType:'',
            formValidate:{},
            formItemLayout: {
                labelCol: {
                xs: { span: 24 },
                sm: { span: 10 }
                },
                wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 }
                }
            },
        }
    },
    props:{
        dialogDetailChild:{
            type: Object,
            default:()=>{
                return {
                    dialogDetailFather:false,
                    dialogType:''
                };
            }
        }
    },
    computed: {
        detailTitleText(){
            let dialogType = this.dialogDetailChild.dialogType || 'e';
            if(dialogType ==='e' || dialogType ==='p'){
                return '查看详情';
            }else if(dialogType === 'b'){
                return '黑名单详情';
            }else{
                return '查看详情';
            }
        }
    },
    watch: {
        dialogDetailChild:{
            handler(val, oldVal){
               this.formValidate = val.list || {};
              console.log("dialogDetailChild: ",this.formValidate);//
            },
                deep:true
        }
        
    },
    created() {
        console.log(this.dialogDetailChild,'detail');
        this.detailDialogType =this.dialogDetailChild.dialogType;
    },
    mounted() {
    },
    methods: {
        asyncOK(){

        },
        cancelCall(){
            console.log('取消回掉')
        },
        handleSubmit(){
            
        }
    }
}
</script>
<style scoped>
</style>