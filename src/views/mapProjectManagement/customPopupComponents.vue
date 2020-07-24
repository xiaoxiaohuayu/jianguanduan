<template>
    <div class="tip_details">
        <a-row>
            <a-col class="title_style" :span="8">
                <span>项目编号</span>
            </a-col>
            <a-col class="content_style" :span="16">
                <a>{{ infoObj.projectCode }}</a>
            </a-col>
        </a-row>
        <a-row>
            <a-col class="title_style" :span="8">
                <span>项目名称</span>
            </a-col>
            <a-col class="content_style" :span="16">
                <a>{{ this.infoObj.projectName }}</a>
            </a-col>
        </a-row>
        <a-row>
            <a-col class="title_style" :span="8">
                <span>考勤机安装数量</span>
            </a-col>
            <a-col class="content_style" :span="16">
                <a>{{ infoObj.equipmentNum }}</a>
            </a-col>
        </a-row>
        <a-row>
            <a-col class="title_style" :span="8">
                <span>在线数量</span>
            </a-col>
            <a-col class="content_style" :span="16">
                <a>{{ infoObj.equipmentOnlineNum }}</a>
            </a-col>
        </a-row>
        <a-row>
            <a-col class="title_style" :span="8">
                <span>离线/异常数量</span>
            </a-col>
            <a-col class="content_style" :span="16">
                <a>{{ infoObj.equipmentOfflineNum }}</a>
            </a-col>
        </a-row>
        <a-row>
            <a-col class="title_style" :span="8">
                <span>总员工数量</span>
            </a-col>
            <a-col class="content_style" :span="16">
                <a>{{ infoObj.workerNum }}</a>
            </a-col>
        </a-row>
        <a-row>
            <a-col class="title_style" :span="8">
                <span>状态</span>
            </a-col>
            <a-col class="content_style" :span="16">
                <a>{{ this.dictCode() }}</a>
            </a-col>
        </a-row>
        <a-row >
            <a-col :span="8"></a-col>
            <a-col :span="8" class="button_tip_details">
                <a-button type="primary">查看详情</a-button>
            </a-col>
            <a-col :span="8"></a-col>
        </a-row>
    </div>
</template>
<script>
import dictCode from '../../utils/code';
// console.log(dictCode._getDictCode('UNPUBLISHED'),'+++++++++++++')
export default {
    name:'customPopupComponents',
    components: {},
    data() {
        return {
            infoData:this.infoObj
        }
    },
    props:{
        infoObj:{
             type: Object,
             default:()=>{
                return {
                equipmentNum: 0,
                equipmentOfflineNum: 0,
                equipmentOnlineNum: 0,
                projectCode: "",
                projectName: "",
                projectStatus: "",
                workerNum: 0
                }
            }
        },
    },
    computed: {},
    watch: {
            infoObj(val){
                this.infoObj = val;
            }
    },
    beforeCreate() {},
    created() {
        // console.log(this.infoObj,this.infoData,'信息',this.infoData.projectName)
    },
    methods: {
        getCodeData(){
            this.$get("/paymentsupervision/project/projectMap", {})
            .then((res)=>{

            })
        },
        dictCode(){
            let strCode = dictCode._getDictCode(this.infoObj.projectStatus);
            return strCode;
        }
    },
}
</script>
<style  scoped>
.tip_details{
    width: 424px;
    /* height: 580px; */
    border-radius: 6px;
    box-shadow: 0px 7px 12px -2px rgba(0,0,0,0.3);
}
.tip_details .ant-row{
    padding: 10px;
}
.tip_details .title_style{
    text-align: right;
    padding-right: 25px;
    font-size: 14px;
    color: #000000;
}
.tip_details .title_style>span{
    color: rgba(0,0,0,0.45);
}
.tip_details .content_style{
    font-size: 14px;
    /* border-bottom: 1px solid; */
}
.button_tip_details{
    text-align: center;
}
</style>