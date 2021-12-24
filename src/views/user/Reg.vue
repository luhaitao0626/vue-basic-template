<template>
  <div class="reg-page">
    <el-row>
      <el-col class="title">
        <h2>欢迎注册</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="7">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="请输入邮箱" prop="username">
            <el-input
              type="text"
              placeholder="请输入正确的邮箱地址"
              v-model="ruleForm.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="checkPass"
              placeholder="请再次输入密码"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >注册</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//TODO nprogress 可以在拦截其中增加进度条
import * as types from "@/store/action-types";
import * as user from "@/api/user";
export default {
  data() {
    let checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不正确"));
      } else {
        callback();
      }
    };
    let checkPassword1 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码必填"));
      } else {
        callback();
      }
    };
    let checkPassword2 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: "",
      },
      rules: {
        username: [{ validator: checkEmail, trigger: "blur" }],
        password: [{ validator: checkPassword1, trigger: "blur" }],
        checkPass: [{ validator: checkPassword2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            await user.reg(this.ruleForm);
            this.$message({
              type: "success",
              message: "注册成功了，情去登录",
            });

            setTimeout(() => {
              this.$router.push("/login");
            });
          } catch (e) {
            this.$message({
              type: "error",
              message: e,
            });
          }
        } else {
          return false;
        }
      });
    },
    resetForm() {},
  },
};
</script>

<style>
.title{
  text-align: center;
  margin-bottom:15px;
}
</style>