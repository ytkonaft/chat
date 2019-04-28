<template>
  <div class="chat_side-bar">
    <div v-bar>
      <div @scroll="handleScroll" ref="scrollWrp">
        <UserBar />
        <ConsumersList />
      </div>
    </div>
    <button
      :class="{ visible: scrollTopBtn }"
      @click="scrollTop"
      class="scroll-top_btn"
    >
      <i class="el-icon-arrow-up"></i>
    </button>
  </div>
</template>

<script>
import UserBar from "@/components/UserBar.vue";
import ConsumersList from "@/components/ConsumersList.vue";

export default {
  components: {
    UserBar,
    ConsumersList
  },
  data() {
    return {
      scrollTopBtn: false
    };
  },
  methods: {
    handleScroll(e) {
      if (e.target.scrollTop >= 100) {
        this.scrollTopBtn = true;
      } else {
        this.scrollTopBtn = false;
      }
    },
    scrollTop() {
      this.$refs.scrollWrp.scrollTop = 0;
    }
  }
};
</script>

<style lang="scss">
.chat_side-bar {
  display: flex;
  flex-direction: column;
  position: relative;
}

.scroll-top_btn {
  width: 55px;
  height: 45px;
  background-color: #235c61;
  position: absolute;
  bottom: 40px;
  left: -45px;
  opacity: 0;
  padding-right: 6px;
  text-align: right;
  visibility: hidden;
  border: none;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  border: 2px solid #fff;
  transition: all 0.3s ease;
  outline: none;
  color: #fff;
  font-size: 19px;
  &:hover {
    left: -10px !important;
    padding-right: 12px;
  }
  &.visible {
    opacity: 1;
    left: -25px;
    visibility: visible;
  }
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
