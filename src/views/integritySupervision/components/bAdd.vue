<script>
import bAdd from './add';
export default {
    name:'',
    extends:bAdd,
    data() {
        return {
            
        }
    },
    computed: {},
    watch: {
            
    },
    created() {
    },

    mounted() {
    },
    methods: {
        handleConfirm() {
            let fromData = this.form.getFieldsValue()
            console.log(fromData,'黑名单个人 ')
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    this.$post("/paymentsupervision/Blacklist/savePersonalBlacklist", fromData)
                    .then((res)=>{
                        console.log(res,'返回')
                        if(res){

                        }
                    })
                }
            })
        },    
    }
}
</script>
<style scoped>

</style>