<template>
  <div class="chat_side-bar">
    <div v-bar>
      <div>
        <UserBar />
        <ConsumersList />
      </div>
    </div>
  </div>
</template>

<script>
import UserBar from "@/components/UserBar.vue";
import ConsumersList from "@/components/ConsumersList.vue";

export default {
  components: {
    UserBar,
    ConsumersList
  }
};
</script>

<style lang="scss">
.chat_side-bar {
  display: flex;
  flex-direction: column;
}

.chat_side-bar {
  background: rgba(128, 173, 177, 1);
  background: -moz-linear-gradient(
    top,
    rgba(128, 173, 177, 1) 0%,
    rgba(157, 195, 191, 1) 40%,
    rgba(250, 247, 244, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(128, 173, 177, 1)),
    color-stop(40%, rgba(157, 195, 191, 1)),
    color-stop(100%, rgba(250, 247, 244, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(128, 173, 177, 1) 0%,
    rgba(157, 195, 191, 1) 40%,
    rgba(250, 247, 244, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(128, 173, 177, 1) 0%,
    rgba(157, 195, 191, 1) 40%,
    rgba(250, 247, 244, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(128, 173, 177, 1) 0%,
    rgba(157, 195, 191, 1) 40%,
    rgba(250, 247, 244, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(128, 173, 177, 1) 0%,
    rgba(157, 195, 191, 1) 40%,
    rgba(250, 247, 244, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80adb1', endColorstr='#faf7f4', GradientType=0 );
  height: 100%;
}
</style>
