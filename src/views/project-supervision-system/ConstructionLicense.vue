<template>
    <div>

        <TittleInfoCmp :show-search=true tittle="施工许可证" btn-tittle="查询" placeholder="项目名称" @searchclick="click"/>


        <div>
            <a-table :columns="columns" :data-source="dataSource" bordered>

                <span slot="pdf" slot-scope="text,record"> <img src="../../assets/images/pdf.png" style="width: 26px;height: 26px"></span>

            </a-table>
        </div>
    </div>
</template>

<script>
    import TittleInfoCmp from'../../components/TittleInfoCmp';

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
            title: '附件',
            dataIndex: '--',
            key: '--',
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
        name: "ConstructionLicense",
        data(){
            return{
                dataSource,
                columns,
            }
        },
        computed:{

        },
        components:{
            TittleInfoCmp,
        },
        methods:{
            click(text) {
                console.log(text, '1111v');
            }
        }
    }
</script>

<style scoped>



</style>
