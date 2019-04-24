<template>
  <div class="consumers-wrp">
    <div class="consumers-inner">
      <div
        class="consumer-itm"
        v-for="index in 22"
        :key="index"
        :class="{
          active: index % 5 == 0
        }"
      >
        <div
          class="consumer-pic"
          :class="{
            online: index % 3 === 0
          }"
          :style="{
            backgroundImage: `url(https://usern.tums.ac.ir/asset/UserPhoto/0.JPG)`
          }"
        />
        <div class="consumer-info">
          <span class="consumer-name">Consumer</span>
          <p class="consumer-message">Lorem ipsum dolor sit amet...</p>
        </div>
        <div class="consumer-status">
          <span v-if="index % 2 === 0" class="consumer-counter">{{
            index
          }}</span>
          <span class="last-time">21 min</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SignInForm from "@/components/SignInForm.vue";
export default {
  // components: {
  // SignInForm
  // }
};
</script>

<style lang="scss">
.consumers-wrp {
  display: flex;
  padding: 0;
  flex: 1 1 auto;
  position: relative;

  .vb {
    width: 100%;
  }
  .consumers-inner {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
  }
  .consumer-itm {
    background-color: #faf7f4;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 25px 10px 10px 25px;
    display: flex;
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    margin-bottom: 5px;
    flex-direction: row;
    cursor: pointer;
    &.active {
      background-color: #235c61;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
      .consumer-pic {
        border-color: #fff;
      }
      .last-time {
        color: #fff;
      }
      .consumer-counter {
        background-color: #fff;
        color: #333;
      }
      .consumer-info {
        color: #fff;
      }
    }
  }
  .consumer-pic {
    width: 45px;
    height: 45px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    &.online {
      transition: all 0.3s ease;
      box-sizing: border-box;
      border: 1.5px solid #182b4a;
    }
  }
  .consumer-status {
    width: 35px;
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0;
    align-content: space-between;
  }
  .last-time {
    font-size: 10px;
    line-height: 12px;
    color: #333;
    display: inline-block;
    transition: color 0.3s ease;
  }
  .consumer-counter {
    font-size: 10px;
    display: inline-block;
    width: 17px;
    margin: 0 auto;
    line-height: 17px;
    height: 17px;
    background-color: #80adb1;
    border-radius: 50%;
    color: #fff;
    transition: all 0.3s ease;
  }
  .consumer-info {
    padding: 0 5px;
    text-align: left;
    flex: 1 1 auto;
    color: #333;
    transition: color 0.3s ease;
    .consumer-name {
      font-size: 14px;
      font-weight: 500;
    }
    .consumer-message {
      margin: 0;
      font-size: 12px;
    }
  }
}
</style>
