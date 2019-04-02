<template>
  <a-form :form="form">
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="Name"
    >
      <a-input
        v-decorator="[
          'username',
          {rules: [{ required: true, message: 'Please input your name' }]}
        ]"
        placeholder="Please input your name"
      />
    </a-form-item>
    <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <a-button type="primary" @click="check">Check</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  data() {
    return {
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          this.$router.push('/home');
        }
      });
    },
    handleChange(e) {
      this.$nextTick(() => {
        this.form.validateFields(["nickname"], { force: true });
      });
    }
  }
};
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
</script>

