<template>
  <div class="auth-form-wrp" ref="formWrp">
    <div class="status-bar" />
    <h4>Create new account!</h4>
    <el-form :model="formData" :rules="rules" ref="formRef">
      <el-form-item label="Username" prop="usernameNotRequired">
        <el-input
          placeholder="Username"
          v-model="formData.usernameNotRequired"
          clearable
        />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input placeholder="Email" v-model="formData.email" clearable />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          placeholder="Password"
          v-model="formData.password"
          clearable
          show-password
        />
      </el-form-item>
      <el-form-item label="Confirm password" prop="confirm">
        <el-input
          placeholder="Confirm password"
          v-model="formData.confirm"
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
        Already have an account?
        <router-link to="/sign-in">Sign in</router-link>
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
        usernameNotRequired: "",
        email: "",
        password: "",
        confirm: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.anime.play();
    }
  },
  mounted() {
    this.anime = this.shake(this.$refs.formWrp);
  }
};
</script>
