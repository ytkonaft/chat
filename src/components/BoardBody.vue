<template>
  <div class="board-body">
    <div v-bar>
      <div class="messages-wrp" ref="messageList">
        <div class="message-itm" v-for="index in 22" :key="index">
          <div class="message-pic"></div>
          <div class="message-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id animi
              consectetur distinctio, assumenda. Facilis deserunt pariatur
              dolorem expedita iste, fuga fugit dolores delectus aliquid magni
              velit magnam voluptate aspernatur in.
            </p>
            <p class="message-info">
              23:55
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // components: {
  // }
  mounted() {
    const { scrollHeight } = this.$refs.messageList;
    this.$refs.messageList.scrollTop = scrollHeight;
  }
};
</script>

<style lang="scss">
.board-body {
  overflow: hidden;
  flex: 1 1 auto;
  .vb {
    height: 100%;
  }
}
.messages-wrp {
  box-sizing: border-box;
  padding: 30px 15px;
}
.message-itm {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  width: 100%;
  justify-content: flex-start;
  &:nth-child(odd) {
    flex-direction: row-reverse;
    .message-pic {
      margin-right: 0;
      margin-left: 10px;
    }
  }
}
.message-pic {
  width: 45px;
  height: 45px;
  display: flex;
  border-radius: 50%;
  position: relative;
  top: -15px;
  background-color: #333;
  z-index: 889;
  margin-right: 10px;
}
.message-body {
  width: 300px;
  border-radius: 10px;
  text-align: left;
  padding: 5px 10px;
  background-color: #ddd;
  p {
    font-size: 13px;
    margin: 0;
    &.message-info {
      font-size: 12px;
      text-align: right;
    }
  }
}
</style>
