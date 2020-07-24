<template>
    <div>
      <span>项目监管</span> <button @click="addNewProject">新增</button>
      <div id="separator-line"/>

      <div>
        <a-tabs default-active-key="1" @change="callback">

          <a-tab-pane key="1" tab="全部">
          </a-tab-pane>

          <a-tab-pane key="2" tab="施工中">
          </a-tab-pane>

          <a-tab-pane key="3" tab="已竣工">
          </a-tab-pane>

          <a-tab-pane key="4" tab="待审核">
          </a-tab-pane>

        </a-tabs>

        <router-view/>

        <div>asdasdadsa</div>
      </div>

      //style="right: 20px;"
      <a-modal
              title="新增项目"
              :visible="visible"
              :confirm-loading="confirmLoading"
              @ok="handleOk"
              @cancel="handleCancel"
              width=76%
      >
        <a-form :form="form">
          <a-form-item
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  label="账号类型"
          >
            <a-input
                    v-decorator="[
            'username',
            { rules: [{ required: true, message: 'Please input your name' }] },
          ]"
                    placeholder="Please input your name"
            />
          </a-form-item>
          <a-form-item
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  label="账号"
          >
            <a-input
                    v-decorator="[
            'nickname',
            { rules: [{ required: true, message: 'Please input your nickname' }] },
          ]"
                    placeholder="Please input your nickname"
            />
          </a-form-item>

          <a-form-item
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  label="账号密码"
          >
            <a-input
                    v-decorator="[
            'nickname',
            { rules: [{ required: true, message: 'Please input your nickname' }] },
          ]"
                    placeholder="Please input your nickname"
            />
          </a-form-item>

          <a-form-item
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  label="所属企业"
          >
            <a-input
                    v-decorator="[
            'nickname',
            { rules: [{ required: true, message: 'Please input your nickname' }] },
          ]"
                    placeholder="Please input your nickname"
            />
          </a-form-item>
          <a-form-item
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  label="社会统一信用代码"
          >
            <a-input
                    v-decorator="[
            'nickname',
            { rules: [{ required: true, message: 'Please input your nickname' }] },
          ]"
                    placeholder="Please input your nickname"
            />
          </a-form-item>

          <a-form-item
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  label="是否启用"
          >
            <a-input
                    v-decorator="[
            'nickname',
            { rules: [{ required: true, message: 'Please input your nickname' }] },
          ]"
                    placeholder="Please input your nickname"
            />
          </a-form-item>

          <a-form-item
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                  label="备注"
          >
            <a-input
                    v-decorator="[
            'nickname',
            { rules: [{ required: true, message: 'Please input your nickname' }] },
          ]"
                    placeholder="Please input your nickname"
            />
          </a-form-item>
        </a-form>

      </a-modal>
      <div> ----</div>

    </div>
</template>

<script>

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };

  export default {

    data() {
      return {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        formItemLayout,
        formTailLayout,
        form: this.$form.createForm(this, { name: 'dynamic_rule' }),
      }
    },
    mounted() {

    },
    methods: {
      addNewProject(){
        this.visible = true;

      },
      handleOk(e) {
        this.ModalText = 'The modal will be closed after two seconds';
        this.confirmLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
        }, 2000);
      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
      },
      callback(key) {
        console.log(key);
        this.$router.push('/login');
      },
    }
  }
</script>

<style scoped lang="scss">

  .separator-line{
    background-color: red;
    height: 1px;
    margin-bottom: 20px;
  }

</style>
