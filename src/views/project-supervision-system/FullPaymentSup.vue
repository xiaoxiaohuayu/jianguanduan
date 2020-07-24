<template>
    <div>

        <div id="topInfo">
            <span>工资足额发放监管</span>
            <div class="topline"></div>
        </div>
        <div>
            <div class="flexInfo">
                <div class="flexInfo flexInnerInfo">
                    <div class="innerInfoTop">当月应付工资(万元)</div>
                    <div class="innerInfoBottom">200</div>
                </div>

                <a-divider type="vertical" style="height: 58px" />
                <div class="flexInfo flexInnerInfo">
                    <div class="innerInfoTop">当月实付工资(万元)</div>
                    <div class="innerInfoBottom">196</div>
                </div>

                <a-divider type="vertical" style="height: 58px" />
                <div class="flexInfo flexInnerInfo">
                    <div class="innerInfoTop">累计应付工资(万元)</div>
                    <div class="innerInfoBottom">493</div>
                </div>

                <a-divider type="vertical" style="height: 58px" />
                <div class="flexInfo flexInnerInfo">
                    <div class="innerInfoTop">累计拖欠工资(万元)</div>
                    <div class="innerInfoBottom">4</div>
                </div>

                <a-divider type="vertical" style="height: 58px" />
                <div class="flexInfo flexInnerInfo">
                    <div class="innerInfoTop">未足额支付工资项目(个)</div>
                    <div class="innerInfoBottom">1</div>
                </div>
            </div>

            <div style=" margin-left: -25px; margin-right: -25px;height: 10px; background-color: #f0f2f5"></div>
            <a-input class="searchInput" placeholder='项目名称' /> <a-input class="searchInput" placeholder="未足额支付" /> <a-button type="primary"> 查询 </a-button>

        </div>
        <div>
            <a-table :columns="columns" :data-source="dataSource" bordered>
                <span slot="operation" slot-scope="text,record"><a @click="showDetail"> 明细 </a><a> 发送预警 </a></span>
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
            title: '项目员工数量(人)',
            dataIndex: 'psersonNum',
            key: 'psersonNum',
        },
        {
            title: '项目班组数量',
            dataIndex: 'groupNum',
            key: 'groupNum',
        },
        {
            title: '累计应付工资(元)',
            dataIndex: 'totalPay',
            key: 'totalPay',
        },
        {
            title: '累计拖欠工资(元)',
            dataIndex: 'notPay',
            key: 'notPay',
        },
        {
            title: '是否全部足额支付',
            dataIndex: 'isPay',
            key: 'isPay',
        },
        {
            title: '操作',
            dataIndex: '--',
            key: '--',
            scopedSlots: { customRender: 'operation' },
        },
    ];

    const dataSource = [{
        id:1,
        key:1,
        projectName:'科技二路路段整 改项目',
        psersonNum:'2821',
        groupNum:'12',
        totalPay:'292812.12',
        notPay:'1111.11',
        isPay:'是',
    }];

    export default {
        name: "FullPaymentSup",
        data(){
            return{
                dataSource,
                columns,
            }
        },
        computed:{
            dot(){

            }

        },
        methods:{
            showDetail(){
                this.$router.push('/dashboard/fullPaymentSupDetail')
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
        margin-bottom: 10px;
    }
</style>
