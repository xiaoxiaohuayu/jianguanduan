<template>
    <div>

        <div id="topInfo">
            <span>考勤监管</span>
            <div class="topline"></div>
            <a-input class="searchInput" placeholder='企业名称' /> <a-input class="searchInput" placeholder="专户账号" /> <a-button type="primary"> 查询 </a-button>
        </div>

        <div>
            <a-table :columns="columns" :data-source="dataSource" bordered>

                <span slot="button" slot-scope="text,record"> <a>注销</a></span>

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
            // scopedSlots: { customRender: 'button' },
        },
        {
            title: '项目名称',
            dataIndex: 'projectName',
            key: 'projectName',
        },
        {
            title: '专户账号',
            dataIndex: 'specialAccount',
            key: 'specialAccount',
        },
        {
            title: '剩余金额（元）',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: '创建时间',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: '操作',
            dataIndex: '--',
            key: '--',
            scopedSlots: { customRender: 'button' },
        },
    ];

    const dataSource = [{
        key:1,
        id:1,
        projectName:'整改',
        specialAccount:'123456',
        amount:'1000',
        time:'2020-1-1',
    }];

    export default {
        name: "SpecialAccountSup",
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
</script>s

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

    .searchInput{
        width: 150px;
        margin-right: 17px;
    }
</style>
