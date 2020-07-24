<template>
    <div>

        <div id="topInfo">
            <span>维权信息监管</span>
            <div class="topline"></div>
        </div>

        <a-input class="searchInput" placeholder='项目名称' /><a-button type="primary"> 查询 </a-button>

        <div>
            <a-table :columns="columns" :data-source="dataSource" bordered>

                <span slot="notice" slot-scope="text,record"> <img src="../../assets/images/notice.png" style="width: 26px;height: 26px"></span>
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
            title: '维权公示牌',
            dataIndex: '维权公示牌',
            key: '维权公示牌',
            scopedSlots: { customRender: 'notice' },
        },
        {
            title: '附件',
            dataIndex: '附件',
            key: '附件',
            scopedSlots: { customRender: 'pdf' },
        },
    ];

    const dataSource = [{
        id:1,
        key:1,
        projectName:'谢家村房屋改造',
        companyName:'中政建筑工程有限公司',
        workName:'中政建筑工程有限公司',
    }];

    export default {
        name: "RightsInfoSup",
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
    .searchInput{
        width: 150px;
        margin-right: 17px;
        margin-top: 10px;
        margin-bottom: 20px;
    }
</style>
