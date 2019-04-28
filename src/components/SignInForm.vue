<template>
  <div class="auth-form-wrp" ref="formWrp">
    <div class="status-bar" />
    <h4>Login to your account</h4>
    <el-form :model="formData" :rules="rules" ref="formRef">
      <el-form-item label="Username" prop="username">
        <el-input
          placeholder="Username"
          v-model="formData.username"
          clearable
        />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          placeholder="Password"
          v-model="formData.password"
          clearable
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Sign In</el-button>
      </el-form-item>
    </el-form>
    <div class="form-text">
      <p>
        You don't have an account?
        <router-link to="/sign-up">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import shake from "@/mixins/AnimeShake.js";
import rules from "@/mixins/AuthRules.js";

export default {
  mixins: [shake, rules],
  data() {
    return {
      anime: null,
      formData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          this.$router.push("/");
        } else {
          this.anime.play();
          return false;
        }
      });
    }
  },
  mounted() {
    this.anime = this.shake(this.$refs.formWrp);
  }
};
</script>
