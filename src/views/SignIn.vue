<template>
  <div class="sign-in_page">
    <div class="sign-in_wrp">
      <SignInForm />
    </div>
  </div>
</template>

<script>
import SignInForm from "@/components/SignInForm.vue";

export default {
  components: {
    SignInForm
  }
};
</script>

<style lang="scss">
.sign-in_page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
