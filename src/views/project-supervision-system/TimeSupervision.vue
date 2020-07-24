<template>
    <div>

        <div id="topInfo">
            <span>考勤监管</span>
            <div class="topline"></div>
        </div>
        <div>
            <div class="flexInfo">
                <div class="flexInfo flexInnerInfo">
                    <div class="innerInfoTop">安装数量</div>
                    <div class="innerInfoBottom">64台</div>
                </div>
                <a-divider type="vertical" style="height: 58px" />
                <div class="flexInfo flexInnerInfo">
                    <div class="innerInfoTop">离线/异常数量</div>
                    <div class="innerInfoBottom">30台</div>
                </div>
                <a-divider type="vertical" style="height: 58px" />
                <div class="flexInfo flexInnerInfo">
                    <div class="innerInfoTop">考勤机数据对接情况</div>
                    <div class="innerInfoBottom">正常</div>
                </div>
            </div>

        </div>
        <br/>
        <div>
            <a-table :columns="columns" :data-source="dataSource" bordered>

                <span slot="online" slot-scope="text,record"> <div v-if="record.machineOnline"><a-badge status="success" />正常</div><div v-else><a-badge status="success" />异常</div> </span>
            </a-table>
        </div>
    </div>
</template>

<script>

    const columns = [
        {
            title: '项目名称',
            dataIndex: 'projectName',
            key: 'projectName',
        },
        {
            title: '辖区',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: '部门',
            dataIndex: 'workPosition',
            key: 'workPosition',
        },
        {
            title: '行业',
            dataIndex: 'industry',
            key: 'industry',
        },
        {
            title: '考勤机编号',
            dataIndex: 'machineIndentifier',
            key: 'machineIndentifier',
        },
        {
            title: '考勤机名称/备注',
            dataIndex: 'machineName',
            key: 'machineName',
        },
        {
            title: '在线状态',
            dataIndex: 'machineOnline',
            key: 'machineOnline',
            // slots: { title: 'customTitle' },
            scopedSlots: { customRender: 'online' },
        },
        {
            title: '项目地址',
            dataIndex: 'projectLocation',
            key: 'projectLocation',
        },
    ];

    const dataSource = [{
        key:1,
        projectName:'整改',
        location:'ssss',
        workPosition:'qqqqq',
        industry:'ddddd',
        machineIndentifier:'zzzzz',
        machineName:'zzzzz',
        machineOnline: false,
        projectLocation:'asasd'
    }];

    export default {
        name: "TimeSupervision",
        data(){
            return{
                dataSource,
                columns,
            }
        },
        computed:{
            dot(){

            }

        }
    }
</script>

<style scoped>

    #topInfo{
        margin-bottom: 20px;
    }

    #topInfo .topline{
        background-color: #e8e8e8ff;
        height: 1px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    .flexInfo{
        height: 109px;
        /*background-color: green;*/
        display: flex ;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .flexInnerInfo{
        width: 33%;

        /*background-color: red;*/
        flex-direction: column;
        justify-content: center;

    }

    .innerInfoTop{
        /*background-color: red;*/
        color: #00000073;
        font-size: 14px;
        margin-bottom: 4px;
    }

    .innerInfoBottom{

        /*background-color: green;*/
        color: #000000D9;
        font-size: 24px;
    }

</style>
