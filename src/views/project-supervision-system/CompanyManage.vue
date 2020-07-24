<template>
    <div>
        <div id="topInfo">
            <span>企业管理</span>
            <div class="topline"></div>
            <div >
                <a-input placeholder="企业名称" style="width: 150px; margin-right: 17px"/><a-button type="primary">查询</a-button>
            </div>
        </div>

<!--        :columns="columns"-->
        <div>
            <a-table :data-source="data" bordered>

                <a-table-column key="1" title="ID" data-index="key"/>
                <a-table-column key="2" title="企业名称" data-index="companyName" />
                <a-table-column key="3" title="项目工程" data-index="projectName" />
                <a-table-column key="4" title="诚信等级" data-index="companyLevel" />

                <!--  按钮事件-->
                <a-table-column key="5" title="操作" data-index="--" >
                    <template slot-scope="text, record">
                        <router-link to="/dashboard/companyDetail">查看</router-link>
                    </template>
                </a-table-column>
            </a-table>
        </div>
    </div>


</template>

<script>

    const data = [
        {
            key: '1',
            companyID: '111',
            companyName:'XXXXX有限公司',
            projectName: 'XXX项目',
            companyLevel: 'AAAAA',
        },
        {
            key: '2',
            companyID: '222',
            companyName:'XXXXX有限公司',
            projectName: 'XXX项目',
            companyLevel: 'DDDDD',
        },
        {
            key: '3',
            companyID: '333',
            companyName:'XXXXX有限公司',
            projectName: 'XXX项目',
            companyLevel: 'BBBB',
        },
    ];

    export default {
        name: "CompanyManage",
        data() {
            return {
                data,
            };
        },
    }
</script>

<style scoped>

    #topInfo{
        margin-bottom: 20px;
    }

    #topInfo .topline{
        margin-top: 5px;
        margin-bottom: 10px;
        background-color: red;
        height: 1px;
    }

    a-table-column{

        text-align:center;
    }

</style>
