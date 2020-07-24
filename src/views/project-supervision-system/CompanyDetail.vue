<template>
    <div>
        <div class="bgDiv">
            <h2 style="display: inline-block;width: 500px">企业信息</h2><a-button style="margin-right: 100px">编辑+</a-button>
            <div class="separator-line"></div>
            <a-descriptions bordered title="" size="small">

                <a-descriptions-item label="企业名称">
                    XXX有限公司
                </a-descriptions-item>
                <a-descriptions-item label="统一社会信用代码">
                    30472194721894729J
                </a-descriptions-item>
                <a-descriptions-item label='法定代表人'>
                    XXX
                </a-descriptions-item>
                <a-descriptions-item label="法人联系电话">
                    18811111111
                </a-descriptions-item>
                <a-descriptions-item label="登记机关">
                    西安市工商行政管理局高新分局
                </a-descriptions-item>
                <a-descriptions-item label="诚信等级">
                    A
                </a-descriptions-item>

                <a-descriptions-item label="公司地址">
                    陕西省西安市科技二路
                </a-descriptions-item>

            </a-descriptions>
        </div>

        <div>
            <h2>项目信息</h2>

            <div class="separator-line"></div>
            <a-descriptions bordered title="" size="small">

                <a-descriptions-item label="项目名称">
                    陕西榆林道路整改项目
                </a-descriptions-item>
                <a-descriptions-item label="项目编号">
                    GF-01
                </a-descriptions-item>
                <a-descriptions-item label='所属区域'>
                    陕西省榆林市榆阳区鱼河镇
                </a-descriptions-item>
                <a-descriptions-item label="管理部门">
                    榆林市土地局
                </a-descriptions-item>
                <a-descriptions-item label="施工企业">
                    中振建筑工程有限公司
                </a-descriptions-item>
                <a-descriptions-item label="项目类别">
                    城镇改造
                </a-descriptions-item>

                <a-descriptions-item label="建设性质">
                    新建项目
                </a-descriptions-item>
                <a-descriptions-item label="结构类型">
                    砖混结构
                </a-descriptions-item>
                <a-descriptions-item label="建筑面积">
                    3000m²
                </a-descriptions-item>

                <a-descriptions-item label="合同开工日期">
                    2020-06-01
                </a-descriptions-item>

                <a-descriptions-item label="合同竣工日期">
                    2021-06-01
                </a-descriptions-item>
                <a-descriptions-item label="运行状态">
                    施工中
                </a-descriptions-item>


                <a-descriptions-item label="是否在黑名单">
                    否
                </a-descriptions-item>
                <a-descriptions-item label="绑定考勤机">
                    3
                </a-descriptions-item>
                <a-descriptions-item label="     ">

                </a-descriptions-item>



            </a-descriptions>
        </div>
    </div>

</template>

<script>
    export default {
        name: "CompanyDetail",
        data() {
            return {
                size: 'default',
            };
        },
        methods: {
            onChange(e) {
                console.log('size checked', e.target.value);
                this.size = e.target.value;
            },
        },
    }
</script>

<style scoped>
    .bgDiv{
        margin-bottom: 30px;
    }
    .separator-line{
        background-color: red;
        height: 1px;
        margin-bottom: 20px;
    }
</style>
