<template>
    <div>

        <div id="topInfo">
            <span>施工过程结算</span>
            <div class="topline"></div>
        </div>

        <a-input class="searchInput" placeholder='项目名称' /><a-button type="primary"> 查询 </a-button>

        <div>
            <a-table :columns="columns" :data-source="dataSource" bordered>

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
            title: '建设单位名称',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: '建设单位',
            dataIndex: 'companyName_2',
            key: 'companyName_2',
        },
        {
            title: '施工单位',
            dataIndex: 'workName',
            key: 'workName',
        },
        {
            title: '标题',
            dataIndex: 'tittle',
            key: 'tittle',
        },
        {
            title: '约定结算时间',
            dataIndex: 'preTime',
            key: 'preTime',
        },
        {
            title: '结算凭证',
            dataIndex: '结算凭证',
            key: '结算凭证',
            scopedSlots: { customRender: 'pdf' },
        },
        {
            title: '实际结算时间',
            dataIndex: 'actualTime',
            key: 'actualTime',
        },
        {
            title: '结算凭证',
            dataIndex: '结算凭证1',
            key: '结算凭证1',
            scopedSlots: { customRender: 'pdf' },
        },
    ];

    const dataSource = [{
        id:1,
        key:1,
        projectName:'谢家村房屋改造',
        companyName:'中政建筑工程有限公司',
        companyName_2:'中政建筑工程有限公司',
        workName:'中政建筑工程有限公司',
        tittle:'2020年1月工程结算',
        preTime:'2020-06-17',
        actualTime:'2020-06-17',
    }];

    export default {
        name: "ProjectProcessSup",
        data(){
            return{
                dataSource,
                columns,
            }
        },
        computed:{

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
    .searchInput{
        width: 150px;
        margin-right: 17px;
        margin-top: 10px;
        margin-bottom: 20px;
    }
</style>
