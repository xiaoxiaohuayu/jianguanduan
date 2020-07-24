<script>
import pAdd from './add';
export default {
    name:'',
    extends:pAdd,
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
            console.log(fromData,'个人 ')
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    this.$post("/paymentsupervision/integrity/savePersonal", fromData)
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