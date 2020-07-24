<template>
    <div>

        <div id="topInfo">
            <span>工程保证金和支付担保监管</span>
            <div class="topline"></div>
        </div>

        <a-input class="searchInput" placeholder='项目名称' /><a-button type="primary"> 查询 </a-button>

        <div>
            <a-table :columns="columns" :data-source="dataSource" bordered>

                <span slot="status" slot-scope="text,record"> <div v-if="record.isNormal"><a-badge status="success" />正常</div><div v-else><a-badge status="success" />异常</div> </span>
                <span slot="pdf" slot-scope="text,record"> <img src="../../assets/images/pdf.png" style="width: 26px;height: 26px"></span>

            </a-table>
        </div>
    </div>
</template>

<script>

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            // slots: { title: 'customTitle' },
            // scopedSlots: { customRender: 'online' },
        },
        {
            title: '项目名称',
            dataIndex: 'projectName',
            key: 'projectName',
        },
        {
            title: '建设单位',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: '施工单位',
            dataIndex: 'workName',
            key: 'workName',
        },
        {
            title: '工程保证金',
            dataIndex: 'deposite',
            key: 'deposite',
        },
        {
            title: '状态',
            dataIndex: '状态',
            key: '状态',
            scopedSlots: { customRender: 'status' },
        },
        {
            title: '支付担保凭证',
            dataIndex: '支付担保凭证',
            key: '支付担保凭证',
            scopedSlots: { customRender: 'pdf' },
        },
    ];

    const dataSource = [{
        id:1,
        key:1,
        projectName:'谢家村房屋改造',
        companyName:'中政建筑工程有限公司',
        workName:'中政建筑工程有限公司',
        deposite:'1000000.00',
        isNormal:true,
    }];

    export default {
        name: "DepositAndPaySup",
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

    .searchInput{
        width: 150px;
        margin-right: 17px;
        margin-top: 10px;
        margin-bottom: 20px;
    }
</style>
