<template>
  <div class="sign-up_page">
    <div class="sign-up_wrp">
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";

export default {
  components: {
    SignUpForm
  }
};
</script>

<style lang="scss">
.sign-up_page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
